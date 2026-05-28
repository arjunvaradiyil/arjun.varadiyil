import 'dotenv/config';
import { readFileSync } from 'fs';
import { getPayload } from 'payload';
import config from '../src/payload.config';
import { toAbsoluteMediaUrl } from '../src/lib/s3';

async function main() {
  const payload = await getPayload({ config });
  const buf = readFileSync('./public/arjunvaradiyil.png');

  const doc = await payload.create({
    collection: 'media',
    data: { alt: 'Preview test' },
    file: {
      data: buf,
      mimetype: 'image/png',
      name: 'preview-test.png',
      size: buf.length,
    },
  });

  const absolute = toAbsoluteMediaUrl(String(doc.url || ''));
  console.log('stored url:', doc.url);
  console.log('absolute url:', absolute);
  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
