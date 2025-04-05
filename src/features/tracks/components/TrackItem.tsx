import React from 'react'
import { Track } from '../schema/tracksSchema'
import Image from 'next/image'
import Link from 'next/link'
import { formatDuration } from '@/lib/utils'

export const TrackItem = ({track,index}:{track: Track,index?: number}) => {
  return (
    <div className='text-sm grid grid-cols-[40px_1fr_100px] lg:grid-cols-[4ch_1fr_1fr_80px] items-center grow py-2 px-3 hover:bg-card-foreground -ml-2 rounded-md'>
      <div className='text-muted-foreground font-semibold '>{index}</div>
      <div className='flex items-center gap-2 basis-1/2 '>
        <div className='shrink-0 w-10'>
          <Image width={0} height={0} alt={track.name} src={track.album.images[track.album.images.length - 1].url} className='w-full object-cover rounded-md h-auto shadow shadow-muted-foreground/5'/>
        </div>
        <div className='grid font-medium'>
          <Link target='_blank' href={track.external_urls.spotify} className='hover:underline'>
            <h4 className='line-clamp-1 '>{track.name}</h4>
          </Link>
            <p className=' text-muted-foreground line-clamp-1'>
              {track.artists.map((artist,index) => 
                <Link href={artist.external_urls.spotify} target='_blank' className='hover:underline font-medium' key={artist.id}>{artist.name}{index !== track.artists.length -1 && ', '}</Link>
              )}
          </p>
        </div>
      </div>
      <div className="hidden lg:block pl-3">
        <Link target='_blank' href={track.album.external_urls.spotify} className='line-clamp-1 font-medium text-muted-foreground  hover:underline '>{track.album.name}</Link>
      </div>
      <span className='font-medium text-muted-foreground text-right'>{formatDuration(track.duration_ms)}</span>
    </div>
  )
}


export const TrackItemSkeleton = () => {
  return (
    <div className='h-10 bg-card-foreground animate-pulse rounded-md'></div>
  )
}