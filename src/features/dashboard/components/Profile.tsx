import { auth } from '@/auth'
import { LogoutButton } from '@/features/profile/components/LogoutButton'
import React from 'react'
import { BiUser } from 'react-icons/bi'

export const Profile = async () => {
  const session = await auth()
  return (
    <div className='bg-card rounded-md basis-1/5 shrink-0 h-full flex flex-col'>
      <div className='shrink-o p-6 bg-gradient-to-bl to-card bg-muted rounded-t-[inherit] flex items-center gap-4'>
        <div className='basis-1/4 aspect-square bg-card rounded-full flex items-center justify-center'>
          <BiUser className='w-1/3 h-auto'/>
        </div>
        <div className='grow'>
          <p className='font-medium text-sm'>Profile</p>
          <h2 className='text-2xl font-bold capitalize'>{session?.user.name}</h2>
        </div>
      </div>
      <div className='grow overflow-y-auto p-6 space-y-4'>
      
      </div>
      <div className='grid px-6 py-4'>
        <LogoutButton className='bg-muted/50 font-medium text-center py-2 text-sm cursor-pointer hover:opacity-80 rounded-md'>Logout</LogoutButton>
      </div>
    </div>
  )
}
