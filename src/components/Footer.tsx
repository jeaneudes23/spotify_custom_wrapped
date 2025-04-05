import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <div className='flex justify-center h-footer items-center gap-4 text-muted-foreground text-sm'>
      <p>Made by <Link href={'/privacy'} className='hover:underline font-medium'>jeaneudes23</Link>. <Link href={'/privacy'} className='hover:underline font-medium'>Github Repo</Link>. <Link href={'/privacy'} className='hover:underline font-medium'>Privacy Policy</Link></p>
    </div>
  )
}
