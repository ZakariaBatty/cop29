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
  (doc: CardData) => doc.title !== "Publications"
) as CardData | undefined;

const PublicationComponent: React.FC = () => {
  if (!publicationData) {
    return <p className="text-center">Publication data not found.</p>;
  }

  const gridCols = "md:grid-cols-4"; // Define gridCols variable as needed

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">{publicationData.title}</h1>

      <div className={`grid grid-cols-1 ${gridCols} gap-4 justify-center mx-auto`}>
        {publicationData.documents.map((card) => (
          <Card
            key={card.id}
            className="group cursor-pointer transition-colors flex flex-col items-center justify-between rounded-lg shadow-lg p-4"
          >
            <CardContent className="flex flex-col items-center justify-center p-4">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="p-0 cursor-pointer flex flex-col items-center justify-center">
                    <CustomImage
                      src={card.icon || ""}
                      alt={card.title}
                      width={200}
                      height={100}
                      className="mx-auto"
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl h-[80vh]">
                  <iframe
                    src={`/cop29${card.pdfUrl}`}
                    className="w-full h-full border-none"
                    title={card.title}
                  />
                </DialogContent>
              </Dialog>
            </CardContent>

            <CardFooter className="w-full flex justify-center mt-1">
              <h2 className="font-semibold text-xs px-4 py-2 rounded-md transition-colors">
                {card.title}
              </h2>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PublicationComponent;
