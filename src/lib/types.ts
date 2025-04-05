export interface ResponseMeta {
  total: number;
  limit: number;
  offset: number;
  href?: string;
  next: string | null;
  previous: string | null;
}

export type TimeRange = 'short_term'|'medium_term'|'long_term'