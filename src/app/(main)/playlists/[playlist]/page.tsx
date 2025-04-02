import React from 'react'

interface Props {
  params: Promise<{
    playlist: string
  }>
}

export default async function page({params}: Props) {
  const playlist = (await params).playlist
  return (
    <div>{playlist}</div>
  )
}
