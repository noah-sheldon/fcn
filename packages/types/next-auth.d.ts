declare module "next-auth" {
  /**
   * Extend the built-in session types
   */
  export interface Session {
    user: {
      id: string;
      email?: string | null;
      name?: string | null;
      image?: string | null;
      isFirstLogin?: boolean;
      loginCount?: number;
    };
  }

  /**
   * Extend the built-in user types
   */
  export interface User {
    id: string;
    email?: string | null;
    name?: string | null;
    image?: string | null;
    firstLogin: Date;
    lastLogin: Date;
    loginCount: number;
  }
}

declare module "next-auth/jwt" {
  /**
   * Extend the built-in JWT types
   */
  export interface JWT {
    id: string;
    email?: string | null;
    name?: string | null;
    image?: string | null;
    isFirstLogin?: boolean;
    loginCount?: number;
  }
}
