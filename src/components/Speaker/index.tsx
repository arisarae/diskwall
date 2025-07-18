import albumDetailType from "@/types/Album"
import Image from "next/image"

interface albumProps {
  album: albumDetailType 
}

const Speaker: React.FC<albumProps> = ({ album }) => {
  return (
    <div
      className="h-72 w-72 relative justify-items-center content-center bg-[url('/speaker.svg')] bg-cover bg-center bg-no-repeat rounded tilt-up"
      style={{ boxShadow: "0px 0px 4px rgba(0,0,0,0.3)" }}
    >
      <div
        className="h-44 w-44 rounded-full overflow-hidden flex items-center"
        style={{ boxShadow: "0px 0px 4px rgba(0,0,0,0.3)" }}
      >
        <Image
          width={500}
          height={500}
          src={album.image}
          alt={album.title}
          className="rounded-full object-cover h-full w-full animate-[spin_5s_linear_infinite]"
        />
      </div>
      <div
        className="rounded-full bg-white top-33 absolute w-6 h-6"
        style={{
          boxShadow: "inset 0 0 3px rgba(0,0,0,0.3)",
          backgroundColor: "#8995C9",
        }}
      ></div>
    </div>
  );
};

export default Speaker