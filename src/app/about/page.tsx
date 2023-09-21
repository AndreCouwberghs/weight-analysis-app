import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const metadata: Metadata = {
  title: "About",
};

// `app/about/page.tsx` is the UI for the `/about` URL
export default async function Page() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <>
      <h1>About</h1>
      {session?.user && (
        <h3>[Testing] You are logged in as {session.user.name}</h3>
      )}
      {!session && <h3>[Testing] You are not logged in</h3>}
    </>
  );
}
