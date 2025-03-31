import axios from "axios";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { Profile } from "./features/profile/schema/profileSchema";

export const { handlers , signIn , signOut , auth } = NextAuth({
  jwt: {
    maxAge: 3600,
  },
  session: {
    strategy: 'jwt',
    maxAge: 3600
  },
  pages: {
    error: '/',
    signIn: '/',
    signOut: '/',
   },
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        access_token: {
          label: 'Enter Access Token',
          type: 'text'
        },
        refresh_token: {
          label: 'Enter Refresh Token'
        }
      },
      async authorize(credentials) {

        const access_token = credentials?.access_token as string
        const refresh_token = credentials?.refresh_token as string

        try {
          const response = await axios.get('https://api.spotify.com/v1/me',{
            headers: {
              Authorization: `Bearer ${access_token}`
            }
          })
          const profile = response.data as Profile

          return {
            name: profile.display_name,
            email: profile.email,
            access_token,
            refresh_token,
          }

        } catch (error) {
          console.log(error)
          return null
        }

      },
    })
  ],
  callbacks: {
    async authorized ({auth}) {
      return !!auth?.user.access_token
    },
    async jwt({token,user}){
      if (user) {
        token.access_token = user.access_token
        token.refresh_token = user.refresh_token
      }

      return token
    },
    async session ({session,token}) {
      session.user.access_token = token.access_token
      session.user.refresh_token = token.refresh_token
      return session
    }
  },
})
