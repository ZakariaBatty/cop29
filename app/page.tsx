"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';
import Link from 'next/link';
import cardsData from '@/public/cards.json';

export default function Home() {
  return (
    <div className="container p-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
      {cardsData.map((card) => (
        <Card key={card.id} className="overflow-hidden">
          {card.documents ? (
            <Link href={card.link}>
              <CardContent className="p-0 cursor-pointer">
                <Image src={card.image} alt={card.title} width={200} height={200} className="w-full h-auto" />
              </CardContent>
            </Link>
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
