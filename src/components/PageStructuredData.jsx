import JsonLd from './JsonLd';

/** Renders one or more JSON-LD blocks for route-level zero-click SEO. */
export default function PageStructuredData({ schemas }) {
  const list = Array.isArray(schemas) ? schemas : [schemas];

  return (
    <>
      {list.filter(Boolean).map((schema, index) => (
        <JsonLd key={schema['@id'] ?? schema['@type'] ?? index} data={schema} />
      ))}
    </>
  );
}
