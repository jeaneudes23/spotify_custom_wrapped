"use client"

import { logout } from "../server-actions/profileServerActions"

export const LogoutButton = () => {
  const signOut = async () => {
    await logout()
  }

  return (
    <button className="cursor-pointer" onClick={signOut}>Logout</button>
  )
}
