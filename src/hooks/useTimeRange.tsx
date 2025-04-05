"use client"

import { TIME_RANGES } from "@/lib/constants"
import { TimeRange } from "@/lib/types"
import { useSearchParams } from "next/navigation"

export const useTimeRange = () => {
  const searchParams = useSearchParams()
  const time_range = (TIME_RANGES.map(period => period.time_range).includes(searchParams.get('time_range') as TimeRange) ? searchParams.get('time_range') as TimeRange : 'short_term') satisfies TimeRange

  return time_range
}
