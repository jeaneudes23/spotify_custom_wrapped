import React from 'react'
import { BiPlus, BiPlusCircle } from 'react-icons/bi'

export const TrackPlayer = () => {
  return (
    <div className='h-player shrink-0 px-4 flex justify-between gap-4'>
      <div className='flex items-center gap-3 py-3'>
        <div className='h-full bg-card aspect-square rounded-md'>

        </div>
        <div>
          <h3 className='font-medium'>Disaster</h3>
          <p className='text-muted-foreground font-medium text-sm'>Dave, J Hus</p>
        </div>
        <button><BiPlusCircle className='size-4'/></button>
      </div>
      <div>
        progress and controls
      </div>
      <div>
        more options
      </div>
    </div>
  )
}
