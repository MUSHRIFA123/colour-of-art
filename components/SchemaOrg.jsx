import structuredData from '@/data/prod/json/schemaOrg.json';

const SchemaOrg = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default SchemaOrg;