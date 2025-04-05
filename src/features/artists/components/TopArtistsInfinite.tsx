"use client"

import { useInfiniteQuery } from "@tanstack/react-query"
import { getTopArtists } from "../api/artistsApi"
import { getNextPageOffset } from "@/lib/utils"
import { Fragment } from "react"
import { ArtistCard, ArtistCardSkeleton } from "./ArtistCard"

export const TopArtistsInfinite = () => {
  const getInfiniteTopArtists = async ({ pageParam }: {pageParam: number}) => {
    return await getTopArtists({offset: pageParam,time_range: 'short_term'})
  }
  const { data , error , hasNextPage , isFetchingNextPage , status , fetchNextPage } = useInfiniteQuery({
    queryKey: ['topArtists'],
    queryFn: getInfiniteTopArtists,
    initialPageParam: 0,
    getNextPageParam: (lastPage,pages) => getNextPageOffset(lastPage.meta.next)
  })

  return status === 'pending' ? 
    <LoadingSkeleton />
    : status === 'error' ? 
    <p>Error</p>:  (
    <div className="grid gap-6">
    <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-6">
      {data.pages.map((group,i) => 
        <Fragment key={i}>
          {group.artists.map(artist => 
            <ArtistCard artist={artist} key={artist.id}/>
          )}
        </Fragment>
      )}
    </div>
    {isFetchingNextPage ? 
    <LoadingSkeleton /> 
    : 
    hasNextPage &&
    <button className="bg-foreground text-background px-6 py-2 font-medium capitalize mx-auto rounded-md cursor-pointer hover:opacity-80" onClick={() => fetchNextPage()}>Load More</button>
    }
    </div>
  )
}


const LoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-6">
      {Array.from({length: 20},(_,index) =>
        <ArtistCardSkeleton key={index}/>
      )}
    </div>
  )
}