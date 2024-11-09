// /app/files/[id]/page.tsx
import { notFound } from 'next/navigation'
import organizationsData from '@/public/organizations.json'
import { Organization } from '@/types/organizations'

type Props = {
  params: {
    id: string;
  };
}

// Generate all static paths, including each organization ID
export async function generateStaticParams() {
  return Object.values(organizationsData as Record<string, Organization>).map((org) => ({
    id: org.id.toString(),
  }))
}

// Optionally set metadata for each page
export function generateMetadata({ params }: Props) {
  const org = (organizationsData as Record<string, Organization>)[params.id]
  return {
    title: org ? `Documents for ${org.name}` : 'Document Viewer',
  }
}

export default function OrgDocumentsPage({ params }: Props) {
  const org = (organizationsData as Record<string, Organization>)[params.id]
  if (!org) {
    notFound()
  }

  return (
    <div>
      <h1>Documents for {org.name}</h1>
      {/* Render content specific to this organization */}
    </div>
  )
}
