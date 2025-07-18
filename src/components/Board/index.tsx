import albumDetailType from "@/types/Album";
import Image from "next/image";

interface albumProps {
  album: albumDetailType;
}

const Board: React.FC<albumProps> = ({ album }) => {
  return (
    <div className="w-[600px] h-[385px] flex justify-center border-[13px] border-[#EDB67D] bg-[#DCA77D] bg-[url('/board.svg')] p-6 tilt-up gap-5 font-playpen text-center">
      <div className="p-4 bg-lilac w-fit min-w-[150px] h-fit">
        <div className="w-full justify-between flex flex-row p-2">
          <div className="pin" />
          <div className="pin" />
        </div>
        <div className="flex flex-col justify-between gap-2 mb-2">
          {album.tracklist.map((track: String) => (
            <p>{track}</p>
          ))}
        </div>
      </div>
      <div className="w-fit h-[280px] flex flex-col justify-items-center justify-between items-center self-center">
        <div className="justify-items-center w-fit">
          <h1 className="font-syncopate text-3xl">{album.title}</h1>
        </div>
        <div className="flex flex-row flex-wrap items-start gap-2 justify-center w-fit">
          <div className="p-3 bg-periwinkle justify-items-center w-fit">
            <div className="w-full justify-between flex flex-row p-1 pt-0">
              <div className="pin" />
              <div className="pin" />
            </div>
            <p>{album.artist}</p>
          </div>
          <div className="p-3 bg-periwinkle justify-items-center w-fit">
            <div className="w-full justify-between flex flex-row p-1 pt-0">
              <div className="pin" />
              <div className="pin" />
            </div>
            <p>{album.year}</p>
          </div>
          <div className="p-3 bg-sky justify-items-center w-fit">
            <div className="w-full justify-between flex flex-row p-1 pt-0">
              <div className="pin" />
              <div className="pin" />
            </div>
            <p>
              Listen in <a href={album.link}>Spotify</a>
            </p>
          </div>
        </div>
        <div className="p-3 w-fit">
          <p>{album.rating}</p>
        </div>
      </div>
    </div>
  );
};

export default Board;
