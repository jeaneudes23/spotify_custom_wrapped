import { auth } from '@/auth'
import { LogoutButton } from '@/features/profile/components/LogoutButton'
import { StoryOpener } from '@/features/story/components/StoryOpener'
import React from 'react'
import { BiUser } from 'react-icons/bi'
import { CgStories } from 'react-icons/cg'

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
        <h3 className='text-xl font-semibold'><CgStories className='size-6 inline mr-1'/>Available Stories</h3>
        <ul className='divide-y divide-muted'>
          <li className='py-3'>
            <StoryOpener label='monthy' time_range='short_term' />
          </li>
          <li className='py-3'>
            <StoryOpener label='6 months' time_range='medium_term' />
          </li>
          <li className='py-3'>
            <StoryOpener label='Year' time_range='long_term' />
          </li>
        </ul>
      </div>
      <div className='grid px-6 py-4'>
        <LogoutButton className='bg-muted/50 font-medium text-center py-2 text-sm cursor-pointer hover:opacity-80 rounded-md'>Logout</LogoutButton>
      </div>
    </div>
  )
}
