/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@fcn/db";

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/signin", // Redirect to the sign-in page
  },
  callbacks: {
    async signIn({ user }) {
      try {
        // Check if the user exists in the database
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email },
        });

        if (!existingUser) {
          // Create a new user, set firstLogin flag to true
          await prisma.user.create({
            data: {
              email: user.email,
              name: user.name,
              image: user.image,
              firstLogin: new Date(),
              lastLogin: new Date(),
              loginCount: 1,
              isFirstLogin: true, // Add isFirstLogin to database
            },
          });
        } else {
          // Update the user's last login and login count
          await prisma.user.update({
            where: { email: user.email },
            data: {
              lastLogin: new Date(),
              loginCount: existingUser.loginCount + 1,
              isFirstLogin: false, // Make sure to set isFirstLogin to false
            },
          });
        }
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false;
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        // Add user data to the JWT token
        token.id = user.id;
        token.isFirstLogin = user.isFirstLogin; // Add the isFirstLogin flag
        token.loginCount = user.loginCount;
      }
      return token;
    },
    async session({ session, token }) {
      // Add user data to the session object
      if (token) {
        session.user.id = token.id;
        session.user.isFirstLogin = token.isFirstLogin;
        session.user.loginCount = token.loginCount;
      }
      return session;
    },
    async redirect({ baseUrl, token }) {
      // Redirect based on first login
      if (token && token.isFirstLogin) {
        return baseUrl + "/welcome";
      }
      return baseUrl + "/dashboard";
    },
  },
};

export default NextAuth(authOptions);
