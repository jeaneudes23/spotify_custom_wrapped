import { NavBar } from '@/components/NavBar'
import { Sidebar } from '@/components/Sidebar'
import { Profile } from '@/features/dashboard/components/Profile'
import { Providers } from '@/providers/Providers'
import React, { PropsWithChildren } from 'react'

export const revalidate = 0

export default function layout({ children }: PropsWithChildren) {

  return (
    <Providers>
      <NavBar />
      <div className="flex grow h-main-content lg:px-4 gap-4">
        <Sidebar />
        <main className='flex flex-col grow'>
            {children}
        </main>
        <Profile />
      </div>
    </Providers>
  )
}
