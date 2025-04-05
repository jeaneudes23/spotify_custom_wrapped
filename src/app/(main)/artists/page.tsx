import { SelectedTimePeriod } from '@/components/SelectedTimePeriod'
import { TopArtistsInfinite } from '@/features/artists/components/TopArtistsInfinite'
import React from 'react'

export default function page() {
  return (
    <div className='p-6 space-y-8'>
      <div>
        <h2 className='text-3xl font-bold'>Top Artist this <SelectedTimePeriod /></h2>
        <p className='text-muted-foreground'>Only visible to you</p>
      </div>
      <TopArtistsInfinite />
    </div>
  )
}

