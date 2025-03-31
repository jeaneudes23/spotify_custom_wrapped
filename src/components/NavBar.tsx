import { Avatar } from '@/features/profile/components/Avatar'
import { LogoutButton } from '@/features/profile/components/LogoutButton'
import Link from 'next/link'
import React from 'react'
import { BsBox, BsSpotify } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'
import { PiHouse } from 'react-icons/pi'
import { VscClose } from 'react-icons/vsc'

export const NavBar = () => {
  return (
    <div className='h-navbar shrink-0 flex items-center gap-4 justify-between px-4'>
      <Link href={'/'}>
        <BsSpotify className='size-9'/>
      </Link>
      <div className='flex gap-2 items-center p-2 basis-lg'>
        <span className='p-3 rounded-full bg-card'>
          <PiHouse className='size-7'/>
        </span>
        <div className='bg-card group grow flex items-center gap-2 py-3 px-4 rounded-full focus-within:ring-2 transition-all'>
          <span>
            <CiSearch className='size-7' />
          </span>
          <input type="text" className='outline-none w-full' placeholder='What do you want to play ?'/>
          <span className='opacity-0 group-focus-within:opacity-100 transition-all'>
            <VscClose className='size-7'/>
          </span>
          <span className='w-0.5 self-stretch bg-foreground'></span>
          <span>
            <BsBox className='size-6'/>
          </span>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <LogoutButton />
        <Avatar />
      </div>
    </div>
  )
}

