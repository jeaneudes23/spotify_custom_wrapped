import { ResponseMeta, TimeRange } from "@/lib/types";
import { Track } from "../schema/tracksSchema";
import { EmpyResponseMeta } from "@/lib/constants";
import api from "@/lib/api";
import { logAxiosRequestError } from "@/lib/axiosErrorHandler";

interface Params {
  limit?: number,
  offset?: number,
  time_range?: TimeRange
}

export async function getTopTracks(params?: Params): Promise<{tracks: Track[],meta: ResponseMeta}> {
  try {
    const response = await api.get('/me/top/tracks',{params})
    const { items: tracks, ...meta} = response.data
    return { tracks , meta}
  } catch (error) {
    logAxiosRequestError(error)
    return {
      tracks: [],
      meta: EmpyResponseMeta
    }
  }
}