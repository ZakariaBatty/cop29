export interface Document {
   id: number;
   title: string;
   pdfUrl: string;
}

export interface DocumentCategory {
   id: number;
   title: string;
   logo: string;
   documents: Document[];
}

export interface Organization {
   id: number;
   name: string;
   logo: string;
   documents: Document[] | DocumentCategory[];
}

export interface OrganizationsData {
   [key: string]: Organization;
}
