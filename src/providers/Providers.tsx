"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { PropsWithChildren } from "react"
import { SessionProvider } from "next-auth/react"


export const Providers = ({children}: PropsWithChildren) => {
  const queryClient = new QueryClient()
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </SessionProvider>
  )
}
