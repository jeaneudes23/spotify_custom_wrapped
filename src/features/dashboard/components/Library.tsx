import { PlaylistSkeleton } from '@/features/playlist/components/PlaylistSkeleton'
import { UserPlaylists } from '@/features/playlist/components/UserPlaylists'
import React, { Suspense } from 'react'
import { LuLibraryBig } from 'react-icons/lu'
import { RxCross1 } from 'react-icons/rx'

export const Library = () =>  {
  return (
    <div className='bg-card basis-1/5 shrink-0 rounded-md flex flex-col h-full'>
      <div className='shrink-0 p-6 space-y-4'>
        <h2 className='text-xl font-semibold'><LuLibraryBig className='size-6 inline mr-1'/>Your Library</h2>
        <div className='flex items-center gap-2'>
          <button className='bg-foreground/10 rounded-full p-2 text-muted-foreground'><RxCross1 className='size-4' /></button>
          <span className='bg-foreground text-background font-medium capitalize py-1 text-sm px-3 rounded-full'>Playlists</span>
        </div>
      </div>
      <div className='flex-grow overflow-y-auto px-6'>
        <Suspense
          key={'playlists'}
          fallback={<PlaylistSkeleton />}
        >
          {/* <UserPlaylists /> */}
        </Suspense>
      </div>
    </div>
  )
}


