import { auth } from "@/auth";

export default async function Home() {
  const session = await auth()
  return (
    <pre className=" break-all text-wrap">
      {JSON.stringify(session,null,2)}
    </pre>
  );
}
