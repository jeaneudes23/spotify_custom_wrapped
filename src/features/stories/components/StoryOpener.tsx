import React from 'react'

interface Props {
  label: string,
  time_range: 'short_term' | 'medium_term' | 'long_term',
}

export const StoryOpener = ({label,time_range}: Props) => {
  return (
    <div className='flex justify-between items-center'>
      <span className="sr-only">{time_range}</span>
      <h4 className='capitalize font-semibold'>{label}</h4>
      <button className='px-3 bg-primary py-1 font-medium hover:opacity-80 transition-all cursor-pointer rounded-md text-sm'>View</button>
    </div>
  )
}
