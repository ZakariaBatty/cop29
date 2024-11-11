"use client"

import { useRouter } from 'next/navigation'

import { Card, CardContent } from "@/components/ui/card"
import organizationsData from '@/public/organizations.json'
import { DocumentCategory, OrganizationsData } from '@/types/organizations'

export default function MTEDDDocuments() {
  const router = useRouter()

  const mteddData = (organizationsData as OrganizationsData).MTEDD

  const handleCategoryClick = (category: DocumentCategory) => {
    console.log("category", category)
    if (category.id === 1) {
      router.push('/files/mtedd-documents/Overview/')
    } else {
      router.push('/files/mtedd-documents/Publication/')
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-8 text-center">{mteddData.name}</h1>

      {/* Document Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mx-auto md:w-[60%]">
        {(mteddData.documents as DocumentCategory[]).map((category) => (
          <Card
            key={category.id}
            className="group cursor-pointer transition-colors bg-[#56b2e1] hover:bg-[#aed5e8]"
            onClick={() => handleCategoryClick(category)}
          >
            <CardContent className="p-6 h-72 flex flex-col items-center justify-center text-white">
              <h2 className="mt-4 text-2xl font-semibold">{category.title}</h2>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}