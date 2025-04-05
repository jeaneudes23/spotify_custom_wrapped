"use client"

import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

export const InfoPicker = () => {
  const { push } = useRouter()
  const path = usePathname()
  const searchParams = useSearchParams()

  const PAGES = ['home','tracks','artists']
  

  return (
    <div className="bg-gradient-to-l to-card bg-muted rounded-t-md p-6  flex justify-between items-center border-b border-muted">
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
