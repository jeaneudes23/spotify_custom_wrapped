import { StoryOpener } from '@/features/stories/components/StoryOpener'
import React from 'react'
import { CgStories } from 'react-icons/cg'

export const Library = () =>  {
  return (
    <div className='bg-card basis-1/5 shrink-0 rounded-md flex flex-col h-full'>
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
  )
}


