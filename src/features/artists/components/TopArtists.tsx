"use client"

import { useTimeRange } from '@/hooks/useTimeRange'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getTopArtists } from '../api/artistsApi'
import { ArtistCard, ArtistCardSkeleton } from './ArtistCard'

const LIMIT = 10

export const TopArtists = () => {
  const time_range = useTimeRange()
  const getArtists = async () => {
    const { artists } = await getTopArtists({time_range,limit: LIMIT})
    return artists
  }

  const { data: artists, status} = useQuery({
    queryKey: ['top-artists', time_range],
    queryFn: getArtists,
  })

    return status === 'pending' ? 
    <LoadingSkeleton /> 
    : status == "error" ? 
    <p>Error </p> :  (
      <div className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-6">
        {artists.map((artist)=> 
          <ArtistCard  key={artist.id} artist={artist}/>
        )}
      </div>
    )
}

const LoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-6">
      {Array.from({length: LIMIT},(_,index) =>
        <ArtistCardSkeleton key={index}/>
      )}
    </div>
  )
}
