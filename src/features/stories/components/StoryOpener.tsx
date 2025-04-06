"use client"

import { getTopArtists } from '@/features/artists/api/artistsApi'
import { Artist } from '@/features/artists/schema/artistsSchema'
import { getTopTracks } from '@/features/tracks/api/tracksApi'
import { Track } from '@/features/tracks/schema/tracksSchema'
import { TimeRange } from '@/lib/types'
import { formatDuration } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, useTransition } from 'react'
import { AiOutlineLoading } from 'react-icons/ai'
import { BiDownload, BiPlay, BiStop, BiX } from 'react-icons/bi'


interface Props {
  label: string,
  time_range: TimeRange,
}

const LIMIT = 10
const SLIDE_DURATION = 10 // in seconds

const SLIDES = ['artists', 'tracks'] as const

type Slide = typeof SLIDES[number]

export const StoryOpener = ({ label, time_range }: Props) => {
  const [enabled, setEnabled] = useState<boolean>(false)
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [isPaused, setIsPaused] = useState<boolean>(true)
  const [current_slide, setCurrentSlide] = useState<Slide>('artists')
  const [isClosing, startClosing] = useTransition()

  const getStoryData = async () => {
    const [{ artists }, { tracks }] = await Promise.all([await getTopArtists({ time_range, limit: LIMIT }), await getTopTracks({ time_range, limit: LIMIT })])
    setIsVisible(true)
    if (!!!artists.length || !!!tracks.length) {
      throw new Error('No Data')
    }
    return { artists, tracks }
  }

  const { data, status, isLoading } = useQuery({
    queryKey: ['stories-data', time_range],
    queryFn: getStoryData,
    enabled,
  })

  const showStory = () => {
    setEnabled(true)
    setIsVisible(true)
  }

  useEffect(() => {
    if (!isVisible || isLoading || isPaused) return;

    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev === 'artists' ? 'tracks' : 'artists'));
    }, SLIDE_DURATION * 1000);

    return () => clearInterval(intervalId);
  }, [isVisible, isLoading, isPaused]);

  const close = () => {
    startClosing(async () => {
      await new Promise((resolve) => setTimeout(resolve, 150))
      setIsVisible(false)
    })
  }

  return (
    <>
      <button onClick={showStory} className="size-12 relative aspect-square border-primary border-2 rounded-full group cursor-pointer">
        <span className='text-xs capitalize absolute left-1/2 -translate-x-1/2 -top-6 translate-y-2 duration-150 opacity-0 pointer-events-none transition-all group-hover:translate-y-0 group-hover:opacity-100 px-1 py-0.5 rounded-md bg-foreground text-background font-medium whitespace-pre'>{label}</span>
      </button>


      {isVisible &&
        <>
          <button disabled={!isVisible} onClick={close} className={`fixed inset-0 bg-black/90 z-50 ${isClosing ? 'animate-[fade-out_0.3s_ease_1_forwards]' : 'animate-[fade-in_0.3s_ease_1_forwards]'}`}> </button>

          {status == 'pending' ?
            <div className='fixed inset-4 w-fit h-fit m-auto flex justify-center items-center z-50'>
              <AiOutlineLoading className='size-16 animate-spin text-primary' />
            </div>
            : status === 'error' ?
              <div className='fixed w-fit h-fit inset-4 m-auto flex justify-center items-center z-50'>
                <p>Error</p>
              </div>
              :
              <div className={`max-w-md fixed inset-8 max-h-96 mt-8 lg:mt-16 mx-auto space-y-4 z-50 ${isClosing ? 'animate-[fade-out_0.3s_ease_1_forwards]' : 'animate-[fade-in_0.3s_ease_1_forwards]'}`}>
                <div className='flex justify-between'>
                  <div className='flex items-center gap-4'>
                    {SLIDES.map(slide =>
                      <button disabled={isLoading || !isVisible} className={`px-4 py-2 text-sm font-medium capitalize rounded-full cursor-pointer ${current_slide == slide ? 'bg-foreground text-card-foreground' : 'bg-card-foreground '}`} key={slide} onClick={() => setCurrentSlide(slide)}>{slide}</button>
                    )}
                  </div>
                  <div className='flex items-center gap-2'>
                    <button onClick={() => setIsPaused(prev => !prev)} className='p-2 text-sm font-medium capitalize rounded-full cursor-pointer bg-card-foreground hover:opacity-80 transition-all'>
                      {isPaused ?
                        <>
                          <span className="sr-only">Play</span>
                          <BiPlay className='size-5' />
                        </>
                        :
                        <>
                          <span className="sr-only">Pause</span>
                          <BiStop className='size-5' />
                        </>
                      }
                    </button>
                    <button className='p-2 text-sm font-medium capitalize rounded-full cursor-pointer bg-primary hover:opacity-80 transition-all'>
                      <span className="sr-only">download</span>
                      <BiDownload className='size-5' />
                    </button>
                    <button onClick={close} className='p-2 text-sm font-medium capitalize rounded-full cursor-pointer bg-red-600 hover:opacity-80 transition-all'>
                      <span className="sr-only">close</span>
                      <BiX className='size-5' />
                    </button>
                  </div>
                </div>
                <ProgressBar isPaused={isPaused || !isVisible} />
                <div className="bg-card rounded-md shadow-foreground/10 shadow-lg overflow-hidden h-full">
                  <div className={`h-full flex transition-all duration-200 ${current_slide == 'artists' ? '' : '-translate-x-full'}`}>
                    <ArtistsSlide artists={data.artists} label={label} />
                    <TracksSlide tracks={data.tracks} label={label} />
                  </div>
                </div>
              </div>
          }
        </>
      }
    </>
  )
}


const ArtistsSlide = ({ artists, label }: { artists: Artist[], label: string }) => {
  return (
    <div className='basis-full shrink-0 h-full flex flex-col'>
      <div className='px-6 mt-3'>
        <h3 className='text-2xl font-bold'>Top Artists</h3>
        <p className='font-medium text-muted-foreground capitalize'>{label}</p>
      </div>
      <div className='overflow-y-auto px-6 space-y-2 my-3'>
        {artists?.map((artist, index) =>
          <Link target='_blank' href={artist.external_urls.spotify} key={index} className='text-sm flex items-center bg-card-foreground hover:opacity-80 transition-all rounded-lg px-3 py-2 -ml-2'>
            <span className='basis-[2ch] shrink-0 text-muted-foreground font-medium'>{index + 1}.</span>
            <Image width={0} height={0} alt={artist.name} src={artist.images[artist.images.length - 1].url} className='border-2 mx-[1ch] border-foreground/20 shrink-0 w-12 aspect-square object-cover rounded-full' />
            <span className='line-clamp-1 font-medium '>{artist.name}</span>
          </Link>
        )}
      </div>
    </div>
  )
}

const TracksSlide = ({ tracks, label }: { tracks: Track[], label: string }) => {
  return (
    <div className='basis-full shrink-0 h-full flex flex-col'>
      <div className='px-6 mt-3'>
        <h3 className='text-2xl font-bold'>Top Tracks</h3>
        <p className='font-medium text-muted-foreground capitalize'>{label}</p>
      </div>
      <div className='overflow-y-auto px-6 space-y-2 my-3'>
        {tracks.map((track, index) =>
          <div key={index} className='text-sm flex items-center grow py-2 px-3 bg-card-foreground hover:bg-card-foreground -ml-2 rounded-md'>
            <div className='text-muted-foreground font-semibold basis-[2ch]'>{index+1}</div>
            <div className='flex items-center gap-2 '>
              <div className='shrink-0 w-12'>
                <Image width={0} height={0} alt={track.name} src={track.album.images[track.album.images.length - 1].url} className='w-full object-cover rounded-md h-auto shadow shadow-muted-foreground/5' />
              </div>
              <div className='grid font-medium'>
                <Link target='_blank' href={track.external_urls.spotify} className='hover:underline'>
                  <h4 className='line-clamp-1 '>{track.name}</h4>
                </Link>
                <p className=' text-muted-foreground line-clamp-1'>
                  {track.artists.map((artist, index) =>
                    <Link href={artist.external_urls.spotify} target='_blank' className='hover:underline font-medium' key={artist.id}>{artist.name}{index !== track.artists.length - 1 && ', '}</Link>
                  )}
                </p>
              </div>
            </div>
            <span className='font-medium text-muted-foreground text-right ml-auto'>{formatDuration(track.duration_ms)}</span>
          </div>
        )}
      </div>
    </div>
  )
}

const ProgressBar = ({ isPaused }: { isPaused: boolean }) => {
  return (
    <div className='bg-white h-1 w-full rounded-full overflow-hidden'>
      <div className={`h-full bg-primary ${isPaused ? 'w-0' : `animate-[story_linear_infinite]`}`} style={{ animationDuration: `${SLIDE_DURATION}s`, animationPlayState: isPaused ? 'paused' : 'revert' }}></div>
    </div>
  )
}