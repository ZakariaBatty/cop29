export interface Document {
   id: number;
   title: string;
   pdfUrl: string;
}

export interface Organization {
   id: number;
   name: string;
   logo: string;
   documents: Document[];
}

export interface OrganizationsData {
   [key: string]: Organization;
}
