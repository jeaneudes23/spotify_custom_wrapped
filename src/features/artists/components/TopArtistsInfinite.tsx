"use client"

import { useInfiniteQuery } from "@tanstack/react-query"
import { getTopArtists } from "../api/artistsApi"
import { getNextPageOffset } from "@/lib/utils"
import { Fragment } from "react"
import { ArtistCard, ArtistCardSkeleton } from "./ArtistCard"
import { useSearchParams } from "next/navigation"
import { TimeRange } from "@/lib/types"
import { TIME_RANGES } from "@/lib/constants"

export const TopArtistsInfinite = () => {
  const searchParams = useSearchParams()
  const time_range = (TIME_RANGES.map(period => period.time_range).includes(searchParams.get('time_range') as TimeRange) ? searchParams.get('time_range') as TimeRange : 'short_term' ) satisfies TimeRange
  const getInfiniteTopArtists = async ({ pageParam }: {pageParam: number}) => {
    return await getTopArtists({offset: pageParam,time_range: time_range})
  }
  const { data , hasNextPage , isFetchingNextPage , status , fetchNextPage } = useInfiniteQuery({
    queryKey: ['topArtists', time_range],
    queryFn: getInfiniteTopArtists,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => getNextPageOffset(lastPage.meta.next)
  })

  return status === 'pending' ? 
    <LoadingSkeleton />
    : status === 'error' ? 
    <p>Error</p>:  (
    <div className="grid gap-6">
    <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-y-6 gap-x-3">
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
    <button className="bg-foreground text-sm text-background px-6 py-2 font-medium capitalize mx-auto rounded-md cursor-pointer hover:opacity-80" onClick={() => fetchNextPage()}>Load More</button>
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