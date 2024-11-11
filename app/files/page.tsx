"use client"

import { useRouter } from 'next/navigation'
import { Card, CardContent } from "@/components/ui/card"
import organizationsData from '@/public/organizations.json'

import { Organization, OrganizationsData } from '@/types/organizations'
import CustomImage from '@/components/CustomImageProps'

export default function DocumentViewer() {
  const router = useRouter()

  const handleOrgClick = (org: Organization) => {
    if (org.id === 1) { // MTEDD
      router.push('/files/mtedd-documents')
    } else {
      router.push(`/files/${org.id}`)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Documents</h1>

      {/* Organizations Grid */}
      <div className="p-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {Object.values(organizationsData as OrganizationsData).map((org: Organization) => (
          <Card
            key={org.id}
            className="group cursor-pointer transition-colors overflow-hidden hover:bg-[#a4cce0] p-4"
            onClick={() => handleOrgClick(org)}
          >
            <CardContent className="p-4 flex flex-col items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                <CustomImage
                  src={org.logo}
                  alt={org.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 900px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <CustomImage
                  src="/images/JAMILA1.png"
                  alt="JAMILA1"
                  width={155}
                  height={200}
                  className="object-contain mx-auto"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              {/* <h2 className=" text-lg font-semibold">{org.name}</h2> */}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}