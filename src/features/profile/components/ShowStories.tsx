import { getProfile } from "../api/profileApi"

export const ShowStories = async () => {
  const profile = await getProfile()
  return (
    <code>{JSON.stringify(profile,null,2)}</code>
  )
}
