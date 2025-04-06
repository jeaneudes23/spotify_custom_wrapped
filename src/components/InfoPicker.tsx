"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { SwitchTimeRange } from './TimeRange'

export const InfoPicker = () => {
  const path = usePathname()

  const PAGES = ['home','tracks','artists']  

  return (
    <div className="flex justify-between items-center grow gap-2">
      <div className="text-sm hidden lg:flex items-center gap-2 flex-wrap capitalize">
        {PAGES.map(page => 
          <Link key={page} href={`/${page}`} className={`px-3 py-1 rounded-md font-medium ${path == `/${page}` ? 'bg-foreground text-background' : 'bg-white/20'}`}>{page}</Link>
        )}
      </div>
      <div className='ml-auto sm:ml-auto'>
        <SwitchTimeRange />
      </div>
    </div>
  )
}
