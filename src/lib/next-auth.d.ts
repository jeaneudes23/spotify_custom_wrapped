import { DefaultSession } from "next-auth";

/* eslint-disable */

// for some reason es-lint doesn't recognize that this is being used
import { JWT } from "next-auth/jwt"
/* eslint-enable */

declare module "next-auth" {
  interface Session {
    user: {
      access_token: string,
      refresh_token: string,
    } & DefaultSession['user']
  }

  interface User {
    access_token: string
    refresh_token: string,
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    access_token: string
    refresh_token: string,
  }
}
