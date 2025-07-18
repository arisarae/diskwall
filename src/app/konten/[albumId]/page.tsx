import Speaker from "@/components/Speaker";
import Board from "@/components/Board";
import albumDetailType from "@/types/Album";
import albums from "@/data/album";

interface albumProps {
  params: {albumId: string}
}

export default async function AlbumDetailPage({ params }: albumProps) {
  const id = parseInt(params.albumId)
  const album = albums.find((a) => a.id === id)

  if (!album) {
    return <p>Album not found.</p>;
  }

  return (
    <main className="h-screen w-screen flex justify-center bg-[url('/detailPageBg.svg')] bg-bottom bg-no-repeat bg-smart">
      <div className="pb-[] max-w-[80%] w-screen flex flex-row items-end justify-center gap-6">
        <Speaker album={album} />
        <Board album={album} />
      </div>
    </main>
  );
}