import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

// `app/about/page.tsx` is the UI for the `/about` URL
export default function Page() {
  return <h1>About</h1>;
}
