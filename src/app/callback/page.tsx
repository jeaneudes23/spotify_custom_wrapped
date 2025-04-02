import AuthenticateUser from '@/components/AuthenticateUser'
import { logAxiosRequestError } from '@/lib/axiosErrorHandler'
import axios from 'axios'
import { randomUUID } from 'crypto'
import { redirect } from 'next/navigation'
import React from 'react'

interface Props {
  searchParams: Promise<{
    code: string
    state: string
    login: string
  }>
}

export default async function page({searchParams}: Props) {
  const code = (await searchParams).code
  const response_state = (await searchParams).state

  const client_id = process.env.SPOTIFY_CLIENT_ID!
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET!
  const redirect_uri = process.env.NEXT_PUBLIC_REDIRECT_URI!
  const state = randomUUID()

  const requestParams = new URLSearchParams({
    response_type: 'code',
    client_id,
    scope: 'user-read-private user-read-email',
    redirect_uri,
    state,
  })
  

  const getTokens = async (code: string): Promise<{access_token: string, refresh_token: string} | undefined> => {
    // Checking if the states match would require to cache the old state
    try {
      const token = Buffer.from(client_id + ':' + client_secret).toString('base64')
      const response = await axios.post('https://accounts.spotify.com/api/token', {
        code,
        redirect_uri,
        grant_type: 'authorization_code'
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${token}`
        } 
      })
  
      const { access_token , refresh_token } = response.data
      return {access_token,refresh_token}

    } catch (error) {
      console.log('Buffer Error')
      logAxiosRequestError(error)
    }
  }


  if (code && response_state) {
    const tokens = await getTokens(code)
    if (tokens){ return (
      <AuthenticateUser {...tokens}/>
    )} else {
      redirect('/')
    }
  } else {
    redirect(`https://accounts.spotify.com/authorize?${requestParams.toString()}`)
  }

}
