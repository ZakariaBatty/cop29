"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import organizationsData from "@/public/organizations.json";
import CustomImage from "@/components/CustomImageProps";

interface Document {
  id: number;
  title: string;
  icon?: string;
  pdfUrl: string;
}

interface CardData {
  id: number;
  title: string;
  logo: string;
  documents: Document[];
}

// Adjust to match the structure in organizationsData, assuming `title` is used to find the publication data
const publicationData = organizationsData.MTEDD.documents.find(
  (doc: CardData) => doc.title === "Publication"
) as CardData | undefined;

const PublicationComponent: React.FC = () => {
  if (!publicationData) {
    return <p className="text-center">Publication data not found.</p>;
  }

  const gridCols = "md:grid-cols-4"; // Define gridCols variable as needed

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Overview of our strategies</h1>

      <div className={`grid grid-cols-1 ${gridCols} gap-4 justify-center mx-auto`}>
        {publicationData.documents.map((card) => (
          <Card key={card.id} className="group cursor-pointer transition-colors">
            <CardContent className="p-4 flex flex-col items-center justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="p-0 cursor-pointer flex flex-col items-center justify-center">
                    <CustomImage
                      src={card.icon || ""}
                      alt={card.title}
                      width={200}
                      height={100}
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl h-[80vh]">
                  <iframe
                    src={`/cop29${card.pdfUrl}`}
                    className="w-full h-full"
                    title={card.title}
                  />
                </DialogContent>
              </Dialog>
              <CardFooter>
                <h2 className="text-xs pt-4 text-center font-semibold">{card.title}</h2>
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PublicationComponent;