import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'
import cardsVidoes from '@/data/cards-videos.json'

export default function VideosPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Videos</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 md:w-[70%] mx-auto gap-4">
        {cardsVidoes.map((org) => (
          <Card key={org.id} className="group cursor-pointer transition-colors hover:bg-red-100">
            <Link href={`/videos/${org.id}`}>
              <CardContent className="p-6 flex flex-col items-center justify-center">
                <div className="relative w-48 h-32">
                  <Image
                    src={org.logo}
                    alt={org.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <Image
                    src="/images/JAMILA1.png"
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