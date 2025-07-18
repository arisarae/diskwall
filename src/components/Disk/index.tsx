import albumDetailType from "@/types/Album"
import Image from "next/image"

interface albumProps {
  album: albumDetailType 
}

const Disk: React.FC<albumProps> = ({ album }) => {
  return (
    <div
      className="cdCase h-fit w-[150px] p-1 justify-items-end"
      style={{ boxShadow: "0px 0px 4px rgba(0,0,0,0.3)" }}
    >
      <div
        className="albumCover h-[130px] w-[130px]"
        style={{ boxShadow: "0px 0px 4px rgba(0,0,0,0.3)" }}
      >
        <Image width={500} height={500} src={album.image} alt={album.title}/>
      </div>
    </div>
  );
}

export default Disk