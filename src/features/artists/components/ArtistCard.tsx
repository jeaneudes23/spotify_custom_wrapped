import React from 'react'
import { Artist } from '../schema/artistsSchema'
import Image from 'next/image'

export const ArtistCard = ({artist}: {artist: Artist}) => {
  return (
    <div className='space-y-4 p-3 hover:bg-muted/40 transition-all rounded-md cursor-pointer -ml-3'>
      <div>
        <Image width={0} height={0} alt={artist.name} src={artist.images[artist.images.length - 2].url} className='w-full object-cover rounded-full aspect-square shadow shadow-muted-foreground/5'/>
      </div>
      <div>
        <h3 className='font-medium'>{artist.name}</h3>
        <p className='text-sm text-muted-foreground capitalize font-medium'>{artist.type}</p>
      </div>
    </div>
  )
}


export const ArtistCardSkeleton = () => {
  return (
    <div className='w-full aspect-square rounded-full bg-muted-foreground animate-pulse'></div>
  )
}