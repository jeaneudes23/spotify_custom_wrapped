"use client"

import { authenticate } from "@/features/profile/server-actions/profileServerActions"
import { useEffect } from "react"

export default function AuthenticateUser({access_token , refresh_token}: {access_token: string , refresh_token: string}) {
  const formData = new FormData()
  formData.set('access_token', access_token)
  formData.set('refresh_token', refresh_token)

  const login = async () => {
    const response = await authenticate(formData)
    console.log(response)
  }

  useEffect(() => {
    login()
  })
  
  return (
    <div>
      <code>
        Access Token: {access_token}
        <br />
        Refresh_token: {refresh_token}
      </code>
    </div>
  )
}
