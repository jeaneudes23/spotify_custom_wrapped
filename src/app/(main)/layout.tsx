import { NavBar } from '@/components/NavBar'
import { Library } from '@/features/dashboard/components/Library'
import { Profile } from '@/features/dashboard/components/Profile'
import { Providers } from '@/providers/Providers'
import React, { PropsWithChildren } from 'react'

export const revalidate = 0

export default function layout({children}: PropsWithChildren) {

  return (
    <Providers>
      <NavBar />
      <div className="flex grow h-main-content px-4 gap-4">
        <Library />
        <main className="grow rounded-md bg-card">{children}</main>
        <Profile />
      </div>
    </Providers>
  )
}
