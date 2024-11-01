"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import organizationsData from '@/data/organizations.json'
import { OrganizationsData } from '@/types/organizations'

export default function FilesPage() {
  const [selectedOrg, setSelectedOrg] = useState<string | null>(null)

  const typedOrganizationsData: OrganizationsData = organizationsData;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Documents</h1>

      {/* Organizations Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 md:w-[70%] mx-auto">
        {Object.entries(typedOrganizationsData).map(([key, org]) => (
          <Card
            key={org.id}
            className="group cursor-pointer transition-colors hover:bg-red-100"
            onClick={() => setSelectedOrg(key)}
          >
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
          </Card>
        ))}
      </div>

      {/* Documents Dialog */}
      <Dialog open={!!selectedOrg} onOpenChange={() => setSelectedOrg(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>
              {selectedOrg && typedOrganizationsData[selectedOrg].name} Documents
            </DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {selectedOrg && typedOrganizationsData[selectedOrg].documents.map((doc) => (
              <Card key={doc.id} className="border-2 border-purple-200 rounded-lg overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-sm font-medium mb-4 min-h-[60px]">
                    {doc.title}
                  </h3>
                  <Button
                    className="w-full bg-[#11316D] hover:bg-[#1a4494]"
                    onClick={() => window.open(doc.pdfUrl, '_blank')}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Télécharger
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}