import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'

const organizations = [
  { id: 1, name: "MTEDD", logo: "/images/logos/mtedd1.png" },
  { id: 2, name: "ADA", logo: "/images/logos/ada.png" },
  { id: 3, name: "AMEE", logo: "/images/logos/amee.png" },
  { id: 4, name: "EAU", logo: "/images/logos/eau.png" },
  { id: 5, name: "IRESEN", logo: "/images/logos/iresen.png" },
  { id: 6, name: "OCP", logo: "/images/logos/ocp.png" },
  { id: 7, name: "NARSA", logo: "/images/logos/narsa.png" },
  { id: 8, name: "MASEN", logo: "/images/logos/masen.png" },
  { id: 9, name: "ONEE", logo: "/images/logos/onee.png" },
  { id: 10, name: "CDG", logo: "/images/logos/cdg.svg" },
]

export default function VideosPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">Videos</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {organizations.map((org) => (
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