import { auth } from "@/auth";
import Link from "next/link";


export default async function Page() {
  const session = await auth()
  return (
    <div className="h-dvh grid place-content-center gap-6">
      <p>
        Login In to you spotify Account
      </p>
      {!!session?.user.access_token ? 
        <Link href={'/home'}>
          Home Page
        </Link>
        :
        <Link href={'/callback'} className="bg-green-600 rounded-md p-4 text-center">Login</Link>
      }
    </div>
  )
}
