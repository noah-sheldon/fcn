import { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user?: {
      isNewUser?: boolean;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    isNewUser?: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    isNewUser?: boolean;
  }
}
