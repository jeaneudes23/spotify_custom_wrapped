import api from "@/lib/api";
import { ResponseMeta, TimeRange } from "@/lib/types";
import { Artist } from "../schema/artistsSchema";
import { EmpyResponseMeta } from "@/lib/constants";

interface Params {
  limit?: number,
  offset?: number,
  time_range?: TimeRange
}

export async function getTopArtists(params?: Params): Promise<{artists: Artist[],meta: ResponseMeta}> {
  try {
    const response = await api.get('/me/top/artists',{params})
    const { items: artists, ...meta} = response.data
    return { artists , meta}
  } catch (error) {
    return {
      artists: [],
      meta: EmpyResponseMeta
    }
  }
}