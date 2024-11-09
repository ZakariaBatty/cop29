import { getFullUrl } from "@/lib/utils";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

interface DocumentLinkProps {
  pdfUrl: string;
  title: string;
  className?: string;
}

export default function DocumentLink({ pdfUrl, title, className }: DocumentLinkProps) {
  const fullUrl = getFullUrl(pdfUrl);

  const handleClick = () => {
    try {
      window.open(fullUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Error opening PDF:', error);
      // Optionally, you could show a user-friendly error message here
    }
  };

  return (
    <Button
      onClick={handleClick}
      className={className}
      aria-label={`Télécharger ${title}`}
    >
      <Download className="mr-2 h-4 w-4" />
      Télécharger
    </Button>
  );
}