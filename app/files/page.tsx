"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from '@/components/ui/scroll-area'
import organizationsData from '@/public/organizations.json'

import { Organization, Document, DocumentCategory, OrganizationsData } from '@/types/organizations'
import CustomImage from '@/components/CustomImageProps'
import DocumentLink from '@/components/DocumentLink'

export default function DocumentViewer() {
  const [selectedOrg, setSelectedOrg] = useState<Organization | null>(null)
  const router = useRouter()

  const handleOrgClick = (org: Organization) => {
    if (org.id === 1) { // MTEDD
      router.push('/files/mtedd-documents')
    } else {
      setSelectedOrg(org)
    }
  }

  const isNestedStructure = (docs: Document[] | DocumentCategory[]): docs is DocumentCategory[] => {
    return docs.length > 0 && 'documents' in docs[0]
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Documents</h1>

      {/* Organizations Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mx-auto">
        {Object.values(organizationsData as OrganizationsData).map((org: Organization) => (
          <Card
            key={org.id}
            className="group cursor-pointer transition-colors hover:bg-[#a4cce0]"
            onClick={() => handleOrgClick(org)}
          >
            <CardContent className="p-4 flex flex-col items-center justify-center">
              <div className="relative">
                <CustomImage
                  src={org.logo}
                  alt={org.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

      {/* Documents Dialog for non-MTEDD organizations */}
      <Dialog open={!!selectedOrg} onOpenChange={() => setSelectedOrg(null)}>
        <DialogContent className="w-[90vw] max-w-5xl h-[90vh] flex flex-col p-0 gap-0">
          <DialogHeader className="px-6 py-4 flex-shrink-0">
            <DialogTitle className="text-xl font-semibold">
              {selectedOrg?.name} Documents
            </DialogTitle>
          </DialogHeader>
          <ScrollArea className="flex-grow px-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedOrg && !isNestedStructure(selectedOrg.documents) &&
                (selectedOrg.documents as Document[]).map((doc) => (
                  <Card
                    key={doc.id}
                    className="border border-muted transition-colors hover:border-muted-foreground/25"
                  >
                    <CardContent className="p-4 space-y-4">
                      <h3 className="font-medium leading-tight min-h-[2.5rem] line-clamp-2">
                        {doc.title}
                      </h3>
                      <DocumentLink pdfUrl={doc.pdfUrl} />
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