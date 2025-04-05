"use client"

import { PropsWithChildren } from "react"
import { logout } from "../server-actions/profileServerActions"

interface Props extends PropsWithChildren {
  className?: string
}

export const LogoutButton = ({className,children}: Props) => {
  const signOut = async () => {
    await logout()
  }

  return (
    <button className={className} onClick={signOut}>{children}</button>
  )
}
