import albumDetailType from "@/types/Album"
import Image from "next/image"

interface albumProps {
  album: albumDetailType 
}

const Board: React.FC<albumProps> = ({ album }) => {
  return (
    <div className="w-[600px] h-[385px] border-[13px] border-[#EDB67D] bg-[#DCA77D] bg-[url('/board.svg')] p-6 tilt-up grid grid-cols-3 grid-rows-5 gap-2">
      <div className="p-4 bg-lilac row-span-5 ...">
        <div className="w-full justify-between flex flex-row">
          <div className="pin" />
          <div className="pin" />
        </div>
        {album.tracklist.map((track: String) => (
          <p>{track}</p>
        ))}
      </div>
      <div className="p-4 col-span-2 ...">
        <p>{album.title}</p>
      </div>
      <div className="p-4 col-span-2"></div>
      <div className="p-4 bg-periwinkle ...">
        <div className="w-full justify-between flex flex-row">
          <div className="pin" />
          <div className="pin" />
        </div>
        <p>{album.artist}</p>
      </div>
      <div className="p-4 bg-periwinkle ...">
        <div className="w-full justify-between flex flex-row">
          <div className="pin" />
          <div className="pin" />
        </div>
        <p>{album.year}</p>
      </div>
      <div className="p-4 bg-sky col-span-2 ...">
        <div className="w-full justify-between flex flex-row">
          <div className="pin" />
          <div className="pin" />
        </div>
        <a href={album.link}>{album.link}</a>
      </div>
      <div className="p-4 col-span-2 ...">
        <p>{album.rating}</p>
      </div>
    </div>
  );
}

export default Board