"use client"

import { useSession } from "next-auth/react"
import { VscLoading } from "react-icons/vsc"

export const Avatar = () => {
  const { data , status } = useSession()

  return (
    <div>
      <div className="size-10 grid place-content-center bg-pink-500 rounded-full">
        {status === 'authenticated' ? 
          <span>{data.user.name?.split(' ').map(name => name[0]).join('')}</span>
          :
          <span>
            <VscLoading className="animate-spin size-5"/>
          </span>
        }
      </div>
    </div>
  )
}
