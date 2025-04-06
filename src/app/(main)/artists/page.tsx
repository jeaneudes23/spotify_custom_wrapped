import { SelectedTimeRange } from '@/components/TimeRange'
import { TopArtistsInfinite } from '@/features/artists/components/TopArtistsInfinite'
import React from 'react'

export default function page() {
  return (
    <div className='flex flex-col h-full bg-card rounded-md'>
      <div className='shrink-0 p-6 border-b border-muted'>
        <h2 className='text-xl font-bold'>Top artists</h2>
        <SelectedTimeRange className="text-muted-foreground font-medium capitalize" />
      </div>
      <div className='overflow-y-auto grow p-4 lg:p-6'>
        <TopArtistsInfinite />
      </div>
    </div>
  )
}

