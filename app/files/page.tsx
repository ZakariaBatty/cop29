"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Assuming you've moved the JSON data to a separate file and imported it
import organizationsData from '@/public/organizations.json'

interface Document {
  id: number
  title: string
  pdfUrl: string
}

interface DocumentCategory {
  id: number
  title: string
  documents: Document[]
}

interface Organization {
  id: number
  name: string
  logo: string
  documents: Document[] | DocumentCategory[]
}

export default function DocumentViewer() {
  const [selectedOrg, setSelectedOrg] = useState<Organization | null>(null)

  const isNestedStructure = (docs: Document[] | DocumentCategory[]): docs is DocumentCategory[] => {
    return docs.length > 0 && 'documents' in docs[0]
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Documents</h1>
      {/* Organizations Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mx-auto">
        {Object.values(organizationsData).map((org: Organization) => (
          <Card
            key={org.id}
            className="group cursor-pointer transition-colors hover:bg-[#a4cce0]"
            onClick={() => setSelectedOrg(org)}
          >
            <CardContent className="p-6 flex flex-col items-center justify-center">
              <div className="relative w-full h-40">
                <Image
                  src={org.logo}
                  alt={org.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <Image
                  src="images/JAMILA1.png"
                  alt="JAMILA1"
                  width={155}
                  height={200}
                  className="object-contain mx-auto"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h2 className="mt-4 text-lg font-semibold">{org.name}</h2>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Documents Dialog */}
      <Dialog open={!!selectedOrg} onOpenChange={() => setSelectedOrg(null)}>
        <DialogContent className="w-[90vw] max-w-5xl h-[90vh] flex flex-col p-0 gap-0">
          <DialogHeader className="px-6 py-4 flex-shrink-0">
            <DialogTitle className="text-xl font-semibold">
              {selectedOrg?.name} Documents
            </DialogTitle>
          </DialogHeader>
          {selectedOrg && (
            isNestedStructure(selectedOrg.documents) ? (
              <Tabs defaultValue={selectedOrg.documents[0]?.id.toString()} className="flex-grow flex flex-col">
                <TabsList className="px-6">
                  {selectedOrg.documents.map((category) => (
                    <TabsTrigger key={category.id} value={category.id.toString()}>
                      {category.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {selectedOrg.documents.map((category) => (
                  <TabsContent key={category.id} value={category.id.toString()} className="flex-grow">
                    <ScrollArea className="h-[calc(90vh-10rem)] px-6 py-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {category.documents.map((doc) => (
                          <DocumentCard key={doc.id} document={doc} />
                        ))}
                      </div>
                    </ScrollArea>
                  </TabsContent>
                ))}
              </Tabs>
            ) : (
              <ScrollArea className="flex-grow px-6 py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedOrg.documents.map((doc) => (
                    <DocumentCard key={doc.id} document={doc} />
                  ))}
                </div>
              </ScrollArea>
            )
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

function DocumentCard({ document }: { document: Document }) {
  return (
    <Card className="border border-muted transition-colors hover:border-muted-foreground/25">
      <CardContent className="p-4 space-y-4">
        <h3 className="font-medium leading-tight min-h-[2.5rem] line-clamp-2">
          {document.title}
        </h3>
        <Button
          className="w-full bg-[#11316D] hover:bg-[#1a4494] text-white"
          onClick={() => window.open(document.pdfUrl, '_blank')}
        >
          <Download className="mr-2 h-4 w-4" />
          Télécharger
        </Button>
      </CardContent>
    </Card>
  )
}