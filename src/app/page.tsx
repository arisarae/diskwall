"use-client";

import Disk from "@/components/Disk";
import albums from "@/data/album";
import albumDetailType from "@/types/Album";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="h-screen w-screen py-10 gap-8 flex flex-col items-center bg-[url('/homePageBg.svg')] bg-bottom bg-no-repeat bg-[length:auto_100%]">
        <h1 className="font-syncopate text-7xl text-periwinkle">DiskWall</h1>
        <div className="flex flex-row flex-wrap justify-center gap-[15px] max-w-[990px]">
          {albums.map((album: albumDetailType) => (
            <Link key={album.id} href={`/konten/${album.id}`}>
              <Disk key={album.id} album={album} />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
