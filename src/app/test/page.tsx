"use-client";

import Disk from "@/components/Disk";
import Speaker from "@/components/Speaker";
import albums from "@/data/album";
import albumDetailType from "@/types/Album";

export default function Home() {
  return (
    <div>
      <main className="h-screen w-screen flex justify-center bg-[url('/homePageBg.svg')] bg-bottom bg-no-repeat bg-[length:auto_100%]">
        <div className="flex flex-row gap-[15px]">
          {albums.map((album: albumDetailType) => (
            <Disk key={album.id} album={album} />
          ))}
        </div>
      </main>
    </div>
  );
}
