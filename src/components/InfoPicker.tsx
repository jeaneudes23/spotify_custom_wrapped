"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export const InfoPicker = () => {
  const path = usePathname()

  const PAGES = ['home','tracks','artists']  

  return (
    <div className="flex justify-between items-center grow">
      <div className="text-sm flex items-center gap-4 capitalize">
        {PAGES.map(page => 
          <Link key={page} href={`/${page}`} className={`px-3 py-1 rounded-md font-medium ${path == `/${page}` ? 'bg-foreground text-background' : 'bg-white/20'}`}>{page}</Link>
        )}
      </div>
      <div>
        <select name="time_range" id="" className="py-1 text-sm bg-card border-foreground border rounded-md">
          <option value="short_term">Month</option>
          <option value="short_term">6 Months</option>
          <option value="short_term">year</option>
        </select>
      </div>
    </div>
  )
}
