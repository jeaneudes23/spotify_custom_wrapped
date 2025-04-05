"use client"

import { useTimeRange } from "@/hooks/useTimeRange"
import { TIME_RANGES } from "@/lib/constants"
import { TimeRange } from "@/lib/types"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { CgCalendar } from "react-icons/cg"

export const SelectedTimeRange = ({className}: {className?: string}) => {
  const current_time_range = useTimeRange()
  return (
    <span className={className}>{TIME_RANGES.find(period => period.time_range == current_time_range)?.label}</span>
  )
}


export const SwitchTimeRange = () => {
  const path = usePathname()
  const { push } = useRouter()
  const searchParams = useSearchParams()
  const activeTimeRange = TIME_RANGES.map(period => period.time_range).includes(searchParams.get('time_range') as TimeRange) ? searchParams.get('time_range') as TimeRange: 'short_term' as TimeRange


  const setTimeRange = (time_range: TimeRange) => {
    const newSearchParams = new URLSearchParams(searchParams)
    newSearchParams.set('time_range',time_range)
    push(`${path}?${newSearchParams.toString()}`)
  }

  return (
    <div className="relative text-sm group">
      <button className="cursor-pointer capitalize hover:opacity-80 py-2 px-4 border rounded-full w-36 inline-flex justify-between items-center bg-card border-muted">
        <SelectedTimeRange />
        <CgCalendar className="size-4"/>
      </button>
      <div className="opacity-0 duration-150 pointer-events-none group-focus-within:opacity-100 group-focus-within:pointer-events-auto translate-0 ease-in absolute whitespace-pre grid min-w-36 right-0 bg-card p-2 rounded-md shadow shadow-foreground/10 gap-2">
        {TIME_RANGES.filter(period => period.time_range !== activeTimeRange ).map(period => 
          <button key={period.time_range} onClick={()=>setTimeRange(period.time_range)} className="inline-flex items-center gap-1 text-sm font-medium capitalize p-2 bg-muted/40 rounded-md  cursor-pointer hover:opacity-80 transition-all">
            {period.label}
          </button>
        )}
      </div>
    </div>
  )
}

