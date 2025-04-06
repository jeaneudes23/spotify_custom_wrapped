import React from 'react'
import { CgStories } from 'react-icons/cg'

export const Sidebar = () => {
  return (
    <aside className='basis-1/5 bg-card hidden lg:flex flex-col'>
      <div className='shrink-o p-6 bg-gradient-to-bl to-card bg-muted rounded-t-md'>
        <h3 className='text-xl font-semibold'><CgStories className='size-6 inline mr-1'/>Available Stories</h3>
      </div>
        
    </aside>
  )
}
