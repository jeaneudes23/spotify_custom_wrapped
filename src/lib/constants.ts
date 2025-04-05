import { ResponseMeta, TimeRange } from "./types"

export const TIME_RANGES: {time_range: TimeRange, label: string}[] = [
  {
    time_range: 'short_term',
    label: 'month',
  },
  {
    time_range: 'medium_term',
    label: '6 months',
  },
  {
    time_range: 'long_term',
    label: 'year',
  },
] 

export const EmpyResponseMeta: ResponseMeta = {
  total: 0,
  limit: 0,
  offset: 0,
  next: null,
  previous: null
}