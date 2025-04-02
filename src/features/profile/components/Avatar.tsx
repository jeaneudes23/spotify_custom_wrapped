import { auth } from "@/auth"

export const Avatar = async () => {
  const session = await auth()
  return (
    <div className="size-10 grid place-content-center bg-pink-500 rounded-full">
        <span>{session?.user.name?.split(' ').map(name => name[0]).join('')}</span>
    </div>
  )
}
