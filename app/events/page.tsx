"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import documentData from '@/public/cards.json';
import CustomImage from '@/components/CustomImageProps';

export default function MTEDDDocuments() {
  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {documentData[0]?.documents?.map((card) => (
        <Card
          key={card.id}
          className="group cursor-pointer transition-colors shadow-lg rounded-lg p-4 flex flex-col items-center justify-between"
        >
          <CardContent className="flex flex-col items-center justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <div className="flex flex-col items-center cursor-pointer">
                  <CustomImage
                    src={card.image}
                    alt={card.title}
                    width={200}
                    height={200}
                    className="rounded-md mx-auto"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-full md:max-w-4xl w-full h-[85vh] p-4 overflow-y-auto">
                <div className="w-full h-full overflow-y-auto">
                  <iframe
                    src={`/cop29${card.pdfUrl}`}
                    className="w-full h-full border-none"
                    title={card.title}
                  />
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
          <CardFooter>
            <h2 className="text-lg font-semibold text-center mt-4">
              {card.title}
            </h2>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
