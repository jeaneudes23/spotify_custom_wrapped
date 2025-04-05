"use client"

import { TIME_RANGES } from "@/lib/constants"
import { TimeRange } from "@/lib/types"
import { useSearchParams } from "next/navigation"

export const SelectedTimePeriod = ({className}: {className?: string}) => {
  const searchParams = useSearchParams()
  const activeTimePeriod = TIME_RANGES.map(period => period.time_range).includes(searchParams.get('time_range') as TimeRange) ? searchParams.get('time_range') : 'short_term'
  return (
    <span className={className}>{TIME_RANGES.find(period => period.time_range == activeTimePeriod)?.label}</span>
  )
}

import React from 'react'

export const SwitchTimePeriod = () => {
  return (
    <div>SelectedTimePeriod</div>
  )
}

