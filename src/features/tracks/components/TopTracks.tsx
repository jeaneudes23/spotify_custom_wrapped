"use client"

import { getTopTracks } from '../api/tracksApi'
import { useTimeRange } from '@/hooks/useTimeRange'
import { useQuery } from '@tanstack/react-query'
import { TrackItem, TrackItemSkeleton } from './TrackItem'

const LIMIT = 10
export const TopTracks = () => {
  const time_range = useTimeRange()  
  const getTracks = async () => {
    const { tracks } = await getTopTracks({time_range: time_range,limit: LIMIT})
    return tracks
  }

  const { status , data: tracks} = useQuery({
    queryKey: ['top-tracks', time_range],
    queryFn: getTracks
  })
  return status === 'pending' ? 
  <LoadingSkeleton /> 
  : status == "error" ? 
  <p>Error </p> :  (
    <div>
      {tracks.map((track,index)=> 
        <TrackItem index={index+1} key={track.id} track={track}/>
      )}
    </div>
  )
}

const LoadingSkeleton = () => {
  return (
    <div className="grid gap-1">
      {Array.from({length: LIMIT},(_,index) =>
        <TrackItemSkeleton key={index}/>
      )}
    </div>
  )
}
