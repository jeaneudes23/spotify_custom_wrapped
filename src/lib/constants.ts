import { ResponseMeta, TimeRange } from "./types"

export const TIME_RANGES: {time_range: TimeRange, label: string}[] = [
  {
    time_range: 'short_term',
    label: 'Month',
  },
  {
    time_range: 'medium_term',
    label: '6 Months',
  },
  {
    time_range: 'long_term',
    label: 'Year',
  },
] 

export const EmpyResponseMeta: ResponseMeta = {
  total: 0,
  limit: 0,
  offset: 0,
  next: null,
  previous: null
}