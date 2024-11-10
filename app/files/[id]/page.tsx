import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import documentsData from '@/public/documents.json';
import CustomImage from '@/components/CustomImageProps';

interface Props {
  params: { id: string };
}

export function generateStaticParams() {
  return documentsData.map((doc) => ({
    id: doc.id.toString(),
  }));
}

export default function FilesDetailPage({ params }: Props) {
  const document = documentsData.find((doc) => doc.id === Number(params.id));

  if (!document) {
    return <p className="text-3xl font-bold mb-6 text-center">Document not found</p>;
  }

  const documentCount = document.documents.length;

  const gridCols =
    documentCount === 1
      ? 'md:grid-cols-1 mx-auto w-[30%]'
      : documentCount === 2
        ? 'md:grid-cols-2'
        : documentCount === 3
          ? 'md:grid-cols-3'
          : 'md:grid-cols-4';

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">{document.name}</h1>

      <div className={`grid grid-cols-1 ${gridCols} gap-4 justify-center mx-auto`}>
        {document.documents.map((card) => (
          <Card
            key={card.id}
            className="group cursor-pointer transition-colors flex flex-col items-center justify-between p-4 rounded-lg shadow-lg"
          >
            <CardContent className="flex flex-col items-center justify-center p-4">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="p-4 cursor-pointer flex flex-col items-center justify-center">
                    <CustomImage
                      src={card.icon}
                      alt={card.title}
                      width={200}
                      height={50}
                      className="block mx-auto"
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-full md:max-w-4xl w-full h-[90vh] overflow-y-auto p-4">
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

            <CardFooter className="w-full flex justify-center">
              <h2 className="font-semibold text-xs px-4 rounded-md transition-colors">
                {card.title}
              </h2>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
