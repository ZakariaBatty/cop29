import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import documentsData from '@/public/documents.json';
import CustomImage from '@/components/CustomImageProps';

// Define Props interface that will handle route parameters
interface Props {
  params: { id: string }; // `id` is a string type for dynamic routing
}

// Define the generateStaticParams function
export function generateStaticParams() {
  return documentsData.map((doc) => ({
    id: doc.id.toString(),
  }));
}

// The component that renders the document details
export default function FilesDetailPage({ params }: Props) {
  // Find the document by id (using params.id)
  const document = documentsData.find((doc) => doc.id === Number(params.id));

  // Handle case when the document is not found
  if (!document) {
    return <p className="text-3xl font-bold mb-6 text-center">Document not found</p>;
  }

  // Calculate the number of documents
  const documentCount = document.documents.length;

  // Determine the number of columns for the grid dynamically
  const gridCols =
    documentCount === 1
      ? 'md:grid-cols-1'
      : documentCount === 2
        ? 'md:grid-cols-2'
        : documentCount === 3 ? 'md:grid-cols-3'
          : 'md:grid-cols-4';

  // Render the list of documents for the document
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">{document.name}</h1>

      <div className={`grid grid-cols-1 ${gridCols} gap-4 justify-center mx-auto`}>
        {document.documents.map((card) => (
          <Card key={card.id} className="group cursor-pointer transition-colors">
            <CardContent className="p-4 flex flex-col items-center justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <CardContent className="p-0 cursor-pointer p-4 flex flex-col items-center justify-center">
                    <CustomImage
                      src={card.icon}
                      alt={card.title}
                      width={200}
                      height={100}
                    />
                  </CardContent>
                </DialogTrigger>
                <DialogContent className="max-w-4xl h-[80vh]">
                  <iframe src={`/cop29${card.pdfUrl}`} className="w-full h-full" />
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
}
