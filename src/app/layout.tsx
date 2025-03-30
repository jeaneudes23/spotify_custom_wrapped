import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { RightSideBar } from "@/features/dashboard/components/RightSideBar";
import { LeftSideBar } from "@/features/dashboard/components/LeftSideBar";
import { TrackPlayer } from "@/components/TrackPlayer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Custom Spotify Wrapped By Youdes",
  description: "Personal spotify wrapped for educational purposes only",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased bg-background text-foreground`}>
        <div className="flex flex-col h-dvh">
          <NavBar />
          <div className="flex grow h-main-content px-4 gap-4">
            <LeftSideBar />
            <main className="grow rounded-md bg-card basis-2/3">{children}</main>
            <RightSideBar />
          </div>
          <TrackPlayer />
        </div>
      </body>
    </html>
  );
}
