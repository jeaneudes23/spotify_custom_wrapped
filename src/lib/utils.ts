export function getNextPageOffset (nextPageUrl: string | null): number | null {
  if (!nextPageUrl) return null
  const url = new URL(nextPageUrl)
  const searchParams = new URLSearchParams(url.searchParams)
  const offset = searchParams.get('offset')
  if (!offset) return null
  return parseInt(offset)
}

export function formatDuration(duration: number): string {
  const seconds = duration / 1000
  return `${Math.floor(seconds / 60)}:${`${(seconds % 60).toFixed()}`.padStart(2,'0')}`
}