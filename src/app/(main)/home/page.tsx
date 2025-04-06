import { SelectedTimeRange } from "@/components/TimeRange";
import { TopArtists } from "@/features/artists/components/TopArtists";
import { StoryOpener } from "@/features/stories/components/StoryOpener";
import { TopTracks } from "@/features/tracks/components/TopTracks";
import { TIME_RANGES } from "@/lib/constants";
import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-y-auto outline-none bg-card">
      <div className="p-4 lg:p-6 space-y-4">
        <div>
          <h2 className="text-2xl font-semibold">Available stories</h2>
        </div>
        <div className="flex gap-2 flex-wrap">
          {TIME_RANGES.map(period => 
            <StoryOpener className="cursor-pointer px-2 py-1 text-sm rounded-lg capitalize bg-primary font-medium border " key={period.time_range} time_range={period.time_range}>
              {period.label}
            </StoryOpener>
          )}
        </div>
      </div>
      <div className="p-4 lg:p-6 space-y-4">
        <div className="flex justify-between items-start gap-2 flex-wrap">
          <div>
            <h2 className='text-xl font-semibold'>Top artists</h2>
            <SelectedTimeRange className="text-muted-foreground font-medium capitalize" />

          </div>
          <Link href={'/artists'} className="text-sm font-medium hover:underline text-muted-foreground">View More</Link>
        </div>
        <TopArtists />
      </div>
      <div className="p-4 lg:p-6 space-y-4">
        <div className="flex justify-between items-start gap-2 flex-wrap">
          <div>
            <h2 className='text-2xl font-bold'>Top tracks</h2>
            <SelectedTimeRange className="text-muted-foreground font-medium capitalize" />
          </div>
          <Link href={'/tracks'} className="text-sm font-medium hover:underline text-muted-foreground">View More</Link>
        </div>
        <TopTracks />
      </div>
    </div>
  );
}
