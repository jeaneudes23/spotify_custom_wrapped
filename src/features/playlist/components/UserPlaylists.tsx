import React from 'react'
import { getUserPlayLists } from '../api/playlistApi'
import { PlayListItem } from './PlayListItem'

export const UserPlaylists = async () => {
  const playlists = await getUserPlayLists()
  return (
    <div className=''>
      {playlists.map((playlist,index) => 
        <PlayListItem playlist={playlist} key={index}/>
      )}
    </div>
  )
}
