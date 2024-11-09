import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import organizationsData from '@/public/organizations.json';
import CustomImage from '@/components/CustomImageProps';

// Define the Document interface
interface Document {
  id: number;
  title: string;
  icon: string;
  pdfUrl: string;
}

// Define the Organization interface
interface Organization {
  id: number;
  name: string;
  logo: string;
  documents: Document[];
}

// Define the Props interface to specify the route parameters
interface Props {
  params: { name: keyof typeof organizationsData }; // Restrict `name` to valid keys of `organizationsData`
}

// Update `generateStaticParams` to return a list of valid organization keys
export function generateStaticParams() {
  const staticPaths = Object.keys(organizationsData).map((name) => ({
    name,
  }));

  return staticPaths;
}

// The component that renders the organization details
export default function FilesDetailPage({ params }: Props) {
  // Dynamically fetch organization data based on the name from params
  const organization = organizationsData[params.name] as Organization; // Type cast to Organization

  // Handle case when the organization is not found (e.g., 404 or redirect)
  if (!organization) {
    return <div>Organization not found</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 mx-auto">
      {organization.documents.map((card) => (
        <Card key={card.id} className="group cursor-pointer transition-colors">
          <CardContent className="p-6 flex flex-col items-center justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <CardContent className="p-0 cursor-pointer">
                  <CustomImage src={card.icon} alt={card.title} width={200} height={200} className="" />
                </CardContent>
              </DialogTrigger>
              <DialogContent className="max-w-4xl h-[80vh]">
                <iframe src={card.pdfUrl} className="w-full h-full" />
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
