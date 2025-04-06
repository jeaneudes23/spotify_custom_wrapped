import React from 'react'
import { InfoPicker } from './InfoPicker'
import Link from 'next/link'
import { RxHome } from 'react-icons/rx'
import { BiLogOut, BiUser } from 'react-icons/bi'
import { LogoutButton } from '@/features/profile/components/LogoutButton'
import { FaExternalLinkAlt } from 'react-icons/fa'

export const NavBar = () => {
  return (
    <div className='h-navbar flex justify-center gap-4 mx-4'>
      <div className='basis-1/5 hidden lg:flex justify-start items-center'>
        <Link href={'/'} className='p-3 bg-card hover:opacity-80 rounded-full'><RxHome className='size-6' /></Link>
      </div>
      <InfoPicker />
      <div className='basis-1/5 hidden lg:flex justify-end items-center' >
        <div className="relative group">
          <button className='p-3 bg-card hover:opacity-80 rounded-full cursor-pointer group-focus-within:ring-2 ring-primary'>
            <span className="sr-only">User</span>
            <BiUser className='size-6' />
          </button>
          <div className="opacity-0 pointer-events-none group-focus-within:opacity-100 group-focus-within:pointer-events-auto transition-all duration-150 ease-in absolute bg-card whitespace-pre right-0 p-2 text-sm rounded-md shadow shadow-foreground/20 grid gap-2">
            <Link className="bg-card-foreground p-2 rounded-md inline-flex gap-1 hover:opacity-80 items-center" href={'http://open.spotify.com/'}>
              <FaExternalLinkAlt className='size-4'/>
              Open Spotify
            </Link>
            <LogoutButton className="bg-card-foreground p-2 rounded-md inline-flex gap-1 hover:opacity-80 items-center cursor-pointer">
              <BiLogOut className='size-5'/>
              Logout
            </LogoutButton>
          </div>
        </div>
      </div>
    </div>
  )
}

