import React from 'react'

export const PlaylistSkeleton = () => {
  return (
    <div className='space-y-3'>
      {Array.from({length: 9},(_,index) => 
        <div key={index} className='h-10 bg-muted animate-pulse rounded-md'>

        </div>
      )}
    </div>
  )
}
