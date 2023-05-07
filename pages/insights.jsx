import dynamic from 'next/dynamic';

const InsightFields = dynamic(() => import('../components/InsightFields'),{ssr: false});

function Insights() {
  return (
    <div>
      <InsightFields />
    </div>
  );
}

export default Insights;
