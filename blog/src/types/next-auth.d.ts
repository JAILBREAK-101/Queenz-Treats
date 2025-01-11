import "next-auth";
import { JWT } from "next-auth/jwt";
import { TUser } from "./user.types";

declare module "next-auth" {
  interface User extends TUser {}
  interface Session {
    user: TUser;
    accessToken?: string;
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    idToken?: string;
  }
}
