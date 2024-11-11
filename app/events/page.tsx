"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import documentData from '@/public/cards.json';
import { useEffect, useState } from "react";
import DocumentLink from "@/components/DocumentLink";

// Utility function to detect if the user is on a mobile device
const isMobile = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

export default function MTEDDDocuments() {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    setIsMobileDevice(isMobile());
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">{documentData[0].title}</h1>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-[65%]">
        {documentData[0]?.documents?.map((card) => (
          <Dialog key={card.id}>
            <DialogTrigger asChild>
              <Card className="group  cursor-pointer transition-colors shadow-lg rounded-lg p-4 flex flex-col items-center justify-between bg-[#56b2e1] hover:bg-[#aed5e8]">
                <CardContent className="p-6 h-72 flex flex-col items-center justify-center text-white">
                  <h2 className="text-2xl font-semibold text-center mt-4">
                    {card.title}
                  </h2>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="w-full h-full max-w-none md:max-w-none p-7">
              {isMobileDevice ? (
                <DocumentLink pdfUrl={card.pdfUrl} />
              ) : (
                <div className="w-full h-full overflow-y-auto">
                  <iframe
                    src={`/cop29${card.pdfUrl}`}
                    className="w-full h-full border-none"
                    title={card.title}
                  />
                </div>
              )}
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
