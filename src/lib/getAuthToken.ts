import { auth } from "@/auth"
import { getSession } from "next-auth/react"

export const getAuthToken = async (): Promise<string | undefined> => {
  if (typeof window !== 'undefined') {
    const session = await getSession()
    return session?.user.access_token
  } else {
    const session = await auth()
    return session?.user.access_token
  }
}