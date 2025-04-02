import React from 'react'
import { Playlist } from '../schema/playlistSchema'
import Image from 'next/image'
import { LuMusic } from 'react-icons/lu'
import Link from 'next/link'

export const PlayListItem = ({playlist}: {playlist: Playlist}) => {
  return (
    <Link href={`/playlists/${playlist.id}`} className='flex items-center gap-2 hover:bg-muted/20 transition-colors px-3 py-2 rounded-md -ml-3 cursor-pointer'>
      <div className='w-14 bg-muted aspect-square rounded-md'>
        {playlist.images?.[0].url ? <Image 
          alt={playlist.name}
          width={0}
          height={0}
          className='w-full h-full rounded-[inherit] object-cover'
          src={playlist.images?.[0].url}
        /> : <div className='w-full h-full flex items-center justify-center'>
            <LuMusic className='size-6'/>
          </div>}
      </div>
      <div className='grow'>
        <h4 className='font-semibold'>{playlist.name}</h4>
        <p className='text-sm font-medium text-muted-foreground'>{playlist.owner.display_name}</p>
      </div>
    </Link>
  )
}
