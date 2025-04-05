"use client"

import { authenticate } from "@/features/profile/server-actions/profileServerActions"
import { useEffect } from "react"
import { AiOutlineLoading } from "react-icons/ai"

export default function AuthenticateUser({ access_token, refresh_token }: { access_token: string, refresh_token: string }) {
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
    <div className='pt-36 pb-8 text-center space-y-4'>
      <div className='flex justify-center'>
        <AiOutlineLoading className='size-8 text-primary animate-spin' />
      </div>
      <h2 className='lg:text-lg font-semibold'>You are now being redirected ...</h2>
    </div>
  )
}
