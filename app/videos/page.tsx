import { Card, CardContent } from "@/components/ui/card"
import Link from 'next/link'
import cardsVidoes from '@/public/cards-videos.json'
import CustomImage from "@/components/CustomImageProps"

export default function VideosPage() {
  return (
    <div className="mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Videos</h1>
      {/* vidoes Grid */}

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6  mx-auto">
        {cardsVidoes.map((org) => (
          <Card key={org.id} className="group cursor-pointer transition-colors hover:bg-[#a4cce0]">
            <Link href={`/videos/${org.id}`}>
              <CardContent className="p-6 flex flex-col items-center justify-center">
                <div className="relative ">
                  <CustomImage
                    src={org.logo}
                    alt={org.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <CustomImage
                    src="images/JAMILA1.png"
                    alt="JAMILA1"
                    width={155}
                    height={200}
                    className="object-contain mx-auto"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}