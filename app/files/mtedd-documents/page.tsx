"use client"

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from '@/components/ui/scroll-area'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import organizationsData from '@/public/organizations.json'
import { DocumentCategory, OrganizationsData } from '@/types/organizations'
import CustomImage from '@/components/CustomImageProps'
import DocumentLink from '@/components/DocumentLinkProps'

export default function MTEDDDocuments() {
  const mteddData = (organizationsData as OrganizationsData).MTEDD
  const [selectedCategory, setSelectedCategory] = useState<DocumentCategory | null>(null)

  const handleCategoryClick = (category: DocumentCategory) => {
    setSelectedCategory(category)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">MTEDD Documents</h1>

      {/* Document Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mx-auto md:w-[60%]">
        {(mteddData.documents as DocumentCategory[]).map((category) => (
          <Card
            key={category.id}
            className="group cursor-pointer transition-colors hover:bg-[#cfdbe2]"
            onClick={() => handleCategoryClick(category)}
          >
            <CardContent className="p-6 flex flex-col items-center justify-center">
              <div className="relative w-full h-40">
                <CustomImage
                  src={category.logo}
                  alt={category.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h2 className="mt-4 text-lg font-semibold">{category.title}</h2>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Documents Dialog */}
      <Dialog open={!!selectedCategory} onOpenChange={() => setSelectedCategory(null)}>
        <DialogContent className="w-[90vw] max-w-5xl h-[90vh] flex flex-col p-0 gap-0">
          <DialogHeader className="px-6 py-4 flex-shrink-0">
            <DialogTitle className="text-xl font-semibold">
              {selectedCategory?.title} Documents
            </DialogTitle>
          </DialogHeader>
          <ScrollArea className="flex-grow px-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedCategory?.documents.map((doc) => (
                <Card
                  key={doc.id}
                  className="border border-muted transition-colors hover:border-muted-foreground/25"
                >
                  <CardContent className="p-4 space-y-4">
                    <h3 className="font-medium leading-tight min-h-[2.5rem] line-clamp-2">
                      {doc.title}
                    </h3>
                    <DocumentLink pdfUrl={doc.pdfUrl} title={doc.title} className="w-full bg-[#11316D] hover:bg-[#1a4494] text-white" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  )
}