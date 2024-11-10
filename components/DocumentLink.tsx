import { Download } from "lucide-react";
import { Button } from "./ui/button";

interface DocumentLinkProps {
  pdfUrl: string;
}

export default function DocumentLink({ pdfUrl }: DocumentLinkProps) {
  const fullUrl = getFullUrl(pdfUrl)

  return (

    <div className="flex flex-col items-center justify-center h-full">
      <p className="text-center mb-4">PDF viewing is not supported on this device.</p>
      <Button
        className="w-full bg-[#11316D] hover:bg-[#1a4494] text-white"
        onClick={() => window.open(fullUrl, '_blank')}
      >
        <Download className="mr-2 h-4 w-4" />
        Download
      </Button>
    </div>

  )
}

function getFullUrl(path: string): string {
  // Check if we're in development or production
  const basePath = process.env.NODE_ENV === 'development' ? '' : '/cop29'
  return `${basePath}${path}`
}