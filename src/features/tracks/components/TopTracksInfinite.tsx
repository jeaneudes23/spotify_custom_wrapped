"use client"

import { getTopTracks } from "../api/tracksApi"
import { useInfiniteQuery } from "@tanstack/react-query"
import { getNextPageOffset } from "@/lib/utils"
import { TrackItem, TrackItemSkeleton } from "./TrackItem"
import { Fragment } from "react"
import { useTimeRange } from "@/hooks/useTimeRange"

const LIMIT = 50
export const TopTracksInfinite = () => {
  const time_range = useTimeRange()
  const getInfiniteTopTracks = async ({ pageParam }: { pageParam: number }) => {
    return await getTopTracks({ offset: pageParam, time_range: time_range, limit: LIMIT })
  }

  const { data, hasNextPage, isFetchingNextPage, status, fetchNextPage } = useInfiniteQuery({
    queryKey: ['top-tracks-infinite', time_range],
    queryFn: getInfiniteTopTracks,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => getNextPageOffset(lastPage.meta.next)
  })

  return status === 'pending' ?
    <LoadingSkeleton />
    : status === 'error' ?
      <p>Error</p> : (
        <div className="grid gap-6">
          <div className="grid">
            {data.pages.map((group, i) =>
              <Fragment key={i}>
                {group.tracks.map((track, index) =>
                  <TrackItem key={index} track={track} index={(LIMIT * (i)) + (index + 1)} />
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
        </div>)
}


const LoadingSkeleton = () => {
  return (
    <div className="grid gap-1">
      {Array.from({ length: 20 }, (_, index) =>
        <TrackItemSkeleton key={index} />
      )}
    </div>
  )
}