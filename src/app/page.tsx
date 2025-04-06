import { auth } from "@/auth";
import Link from "next/link";


export default async function Page() {
  const session = await auth()
  return (
    <div className="h-dvh grid place-content-center gap-6 -mb-footer bg-gradient-to-br  via-60% from-card via-black to-primary/30">
      <div className="max-w-screen-md px-4 text-center space-y-6 ">
        <h1 className="text-4xl md:text-6xl text-balance font-bold capitalize">Discover Your Spotify Insights</h1>
        <p className="text-lg md:text-xl text-muted-foreground">Dive into your personalized Spotify data and uncover your listening habits. Analyze your favorite tracks, artists, and playlists like never before.</p>
        <div className="flex justify-center">
          {!!session?.user.access_token ?
            <Link href={'/home'} className="bg-primary font-semibold text-lg md:text-xl rounded-lg px-6 py-3 text-center">
              Home Page
            </Link>
            :
            <Link href={'/callback'} className="bg-primary font-semibold text-xl rounded-lg px-4 py-2 md:px-6 md:py-3 text-center">Connect with spotify</Link>
          }
        </div>
      </div>
    </div>
  )
}
