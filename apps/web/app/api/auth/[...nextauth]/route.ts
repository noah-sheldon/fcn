import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";
import { prisma } from "@fcn/db";
import { User, JWT, Session } from "@fcn/types";

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async signIn({ user }: { user: User }) {
      try {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email! },
        });

        if (!existingUser) {
          await prisma.user.create({
            data: {
              name: user.name,
              email: user.email,
              firstLogin: new Date(),
              lastLogin: new Date(),
              loginCount: 1,
            },
          });
          user.isNewUser = true;
        } else {
          await prisma.user.update({
            where: { email: user.email! },
            data: {
              lastLogin: new Date(),
              loginCount: { increment: 1 },
            },
          });
          user.isNewUser = false;
        }
        return true;
      } catch (error) {
        console.error("Error signing in", error);
        return false;
      }
    },
    async jwt({ token, user }: { token: JWT; user: User }) {
      if (user) {
        token.isNewUser = user.isNewUser;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.isNewUser = token.isNewUser;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl + "/dashboard";
    },
  },
};

// Export NextAuth handler directly
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
