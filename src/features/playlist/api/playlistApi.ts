import api from "@/lib/api"
import { Playlist } from "../schema/playlistSchema"
import { logAxiosRequestError } from "@/lib/axiosErrorHandler"

export async function getUserPlayLists(): Promise<Playlist[]> {
  try {
    const response = await api.get('/me/playlists')
    const { items: playlists } = response.data
    return playlists
  } catch (error) {
    logAxiosRequestError(error)
    return []
  }
}