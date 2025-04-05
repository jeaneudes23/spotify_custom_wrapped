import { auth } from "@/auth";
import PreviewJson from "@/components/PreviewJson";

export default async function Home() {
  const session = await auth()
  return (
    <div>
      <PreviewJson data={session?.user.access_token}/>
    </div>
  );
}
