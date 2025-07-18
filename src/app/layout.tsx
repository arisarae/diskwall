import type { Metadata } from "next";
import { Syncopate, Playpen_Sans } from "next/font/google";
import "./globals.css";

const syncopate = Syncopate({
  variable: "--font-syncopate",
  subsets: ["latin"],
  weight: "700",
});

const playpen = Playpen_Sans({
  variable: "--font-playpen",
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  title: "DiskWall",
  description: "Discover albums through a wall full of CDs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syncopate.variable} ${playpen.variable} antialiased bg-cream`}
      >
        {children}
      </body>
    </html>
  );
}
