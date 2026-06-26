import JsonLd from './JsonLd';
import { buildHomeGraphSchema } from '../lib/zeroClickSeo';
import { FACEBOOK_URL, X_URL, YOUTUBE_URL } from '../lib/siteSeo';

export default function StructuredData() {
  const extraSameAs = [FACEBOOK_URL, X_URL, YOUTUBE_URL].filter(
    (url) => typeof url === 'string' && url.length > 0,
  );

  return <JsonLd data={buildHomeGraphSchema(extraSameAs)} />;
}
