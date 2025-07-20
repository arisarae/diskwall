import albumDetailType from "@/types/Album"
import Image from "next/image"

interface albumProps {
  album: albumDetailType 
}

const Disk: React.FC<albumProps> = ({ album }) => {
  return (
    <div
      className="cdCase group h-fit w-[16vh] p-1 justify-items-end"
      style={{ boxShadow: "0px 0px 4px rgba(0,0,0,0.3)" }}
    >
      <div
        className="relative albumCover h-[14vh] w-[14vh]"
        style={{ boxShadow: "0px 0px 4px rgba(0,0,0,0.3)" }}
      >
        <Image width={500} height={500} src={album.image} alt={album.title} />
      <div className="h-[14vh] w-[14vh] p-1 absolute inset-0 bg-black/70 text-white text-center opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300">
        <p className="text-m font-semibold">{album.title}</p>
        <p className="mt-1 text-xs">{album.type} by <span className="text-xs italic">{album.artist}</span></p>
      </div>
      </div>

    </div>
  );
}

export default Disk