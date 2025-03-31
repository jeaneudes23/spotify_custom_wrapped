import { NavBar } from '@/components/NavBar'
import { LeftSideBar } from '@/features/dashboard/components/LeftSideBar'
import { RightSideBar } from '@/features/dashboard/components/RightSideBar'
import { Providers } from '@/providers/Providers'
import React, { PropsWithChildren } from 'react'

export default function layout({children}: PropsWithChildren) {
  return (
    <Providers>
      <NavBar />
      <div className="flex grow h-main-content px-4 gap-4">
        <LeftSideBar />
        <main className="grow rounded-md bg-card basis-2/3">{children}</main>
        <RightSideBar />
      </div>
    </Providers>
  )
}
