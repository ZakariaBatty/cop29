import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Image from 'next/image';
import Link from 'next/link';
import cardsData from '@/data/cards.json';

export default function Home() {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {cardsData.map((card) => (
        <Card key={card.id} className="overflow-hidden">
          {card.modalContent ? (
            <Dialog>
              <DialogTrigger asChild>
                <CardContent className="p-0 cursor-pointer">
                  <DialogTitle />
                  <Image src={card.image} alt={card.title} width={200} height={200} className="w-full h-auto" />
                </CardContent>
              </DialogTrigger>
              <DialogContent className="w-[90vw] max-w-5xl h-[90%]  flex flex-col">
                <iframe src={card.modalContent} className="w-full h-full" />
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
