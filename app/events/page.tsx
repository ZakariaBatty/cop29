"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import documentData from '@/public/cards.json'
import CustomImage from '@/components/CustomImageProps'

export default function MTEDDDocuments() {

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mx-auto">
      {documentData[0]?.documents?.map((card) => (
        <Card key={card.id} className="group cursor-pointer transition-colors">
          <CardContent className="p-6 flex flex-col items-center justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <CardContent className="p-0 cursor-pointer">
                  <CustomImage src={card.image} alt={card.title} width={200} height={200} className="" />
                  <h2 className="text-lg text-center font-semibold">{card.title}</h2>
                </CardContent>
              </DialogTrigger>
              <DialogContent className="max-w-4xl h-[80vh]">
                <iframe src={`/cop29${card.pdfUrl}`} className="w-full h-full" />
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
