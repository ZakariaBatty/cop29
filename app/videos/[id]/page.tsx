import cardsVidoes from '@/data/cards-videos.json';
import { Card } from "@/components/ui/card";

interface Props {
  params: { id: number }
}

export default function VideoDetailPage({ params }: Props) {
  // Find the video by the provided ID
  const org = cardsVidoes.find((video) => video.id === Number(params.id));

  if (!org) {
    return <p className="text-3xl font-bold mb-6 text-center">Video not found.</p>;
  }

  const videoCount = org.videos.length;

  // Determine the number of columns based on the number of videos
  const gridCols = videoCount === 1 ? "grid-cols-1" : videoCount === 2 ? "grid-cols-2" : "grid-cols-3";

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">{org.name} Videos</h1>
      <div className={`grid ${gridCols} gap-4 justify-center`}>
        {org.videos.map((videoUrl, index) => (
          <Card key={index} className="p-4">
            <iframe
              width="100%"
              height="500"
              src={videoUrl}
              title={`Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Card>
        ))}
      </div>
    </div>
  );
}
