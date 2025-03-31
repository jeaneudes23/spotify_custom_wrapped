import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";


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
        {children}
      </body>
    </html>
  );
}
