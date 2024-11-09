export interface DocumentCategory {
   id: number;
   title: string;
   logo: string;
   documents: Document[];
}

// Define types for documents inside each organization
export interface Document {
   id: number;
   title: string;
   icon: string;
   pdfUrl: string;
}

// Define types for each organization
export interface Organization {
   id: number;
   name: string;
   logo: string;
   documents?: {
      id: number;
      title: string;
      logo: string;
      documents: Document[];
   }[];
}

// Define the main structure that holds all organizations
export interface OrganizationsData {
   [key: string]: Organization;
}
