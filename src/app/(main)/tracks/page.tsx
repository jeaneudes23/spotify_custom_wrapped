import { SelectedTimeRange } from '@/components/TimeRange'
import { TopTracksInfinite } from '@/features/tracks/components/TopTracksInfinite'
import React from 'react'

export default function page() {
  return (
    <div className='flex flex-col h-full bg-card rounded-md'>
      <div className='shrink-0 p-6 border-b border-muted'>
        <h2 className='text-2xl font-bold'>Top tracks</h2>
        <SelectedTimeRange className="text-muted-foreground font-medium capitalize" />
      </div>
      <div className='overflow-y-auto grow p-6'>
        <TopTracksInfinite />
      </div>
    </div>
  )
}
