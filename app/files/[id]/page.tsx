import documents from '@/public/cards-videos.json';

interface Props {
  params: { id: string }
}

export function generateStaticParams() {
  return documents.map((doc) => ({
    id: doc.id.toString(),
  }))
}

const Programmes = ({ params }: Props) => {
  console.log(params)
  return <div>page</div>;
};

export default Programmes;
