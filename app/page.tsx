"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Image from 'next/image';
import Link from 'next/link';
import cardsData from '@/public/cards.json';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container p-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
      {cardsData.map((card) => (
        <Card key={card.id} className="overflow-hidden">
          {card.documents ? (
            <Dialog>
              <DialogTrigger asChild>
                <CardContent className="p-0 cursor-pointer">
                  <DialogTitle />
                  <Image src={card.image} alt={card.title} width={200} height={200} className="w-full h-auto" />
                </CardContent>
              </DialogTrigger>
              <DialogContent className="w-[90vw] max-w-5xl h-[90%] flex flex-col">
                <ScrollArea className="flex-grow px-6 py-6 rounded-md border">
                  <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-4">
                    {card.documents.map((item) => (
                      <Card
                        key={item.id}
                        className="border border-muted transition-colors hover:border-muted-foreground/25"
                      >
                        <CardContent className="p-4 space-y-4">
                          <h3 className="font-medium leading-tight min-h-[2.5rem] line-clamp-2">
                            {item.title}
                          </h3>
                          <Button
                            className="w-full bg-[#11316D] hover:bg-[#1a4494] text-white"
                            onClick={() => window.open(item.pdfUrl, '_blank')}
                          >
                            <Download className="mr-2 h-4 w-4" />
                            Télécharger
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          ) : (
            <Link href={card.link}>
              <CardContent className="p-0">
                <Image src={card.image} alt={card.title} width={200} height={200} className="w-full h-auto" />
              </CardContent>
            </Link>
          )}
        </Card>
      ))}
    </div>
  );
}
