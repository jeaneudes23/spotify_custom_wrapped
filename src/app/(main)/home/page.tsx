import { SelectedTimeRange } from "@/components/TimeRange";
import { TopArtists } from "@/features/artists/components/TopArtists";
import { TopTracks } from "@/features/tracks/components/TopTracks";

export default function Home() {
  return (
    <div className="overflow-y-auto bg-card">
      <div className="p-6 space-y-4">
        <div>
          <h2 className='text-2xl font-bold'>Top artists</h2>
          <SelectedTimeRange className="text-muted-foreground font-medium capitalize"/>
        </div>
        <TopArtists />
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h2 className='text-2xl font-bold'>Top tracks</h2>
          <SelectedTimeRange className="text-muted-foreground font-medium capitalize"/>
        </div>
        <TopTracks />
      </div>
    </div>
  );
}
