"use client"

import Disk from "@/components/Disk";
import Filter from "@/components/Filter";
import albums from "@/data/album";
import albumDetailType from "@/types/Album";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState<string>("");

  const filteredAlbums = albums.filter((album) =>
    filter === ""
      ? true
      : album.type.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <main className="h-screen w-screen py-7 flex flex-col items-center bg-[url('/homePageBg.svg')] bg-bottom bg-no-repeat bg-[length:auto_100%]">
        <h1 className="font-syncopate text-6xl text-periwinkle mb-3">DiskWall</h1>
        <Filter filter={filter} setFilter={setFilter}/>
        <div className="flex flex-row flex-wrap justify-center gap-[1vh] max-w-[101vh]">
          {filteredAlbums.map((album: albumDetailType) => (
            <Link key={album.id} href={`/konten/${album.id}`}>
              <Disk key={album.id} album={album} />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
