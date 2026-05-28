import 'dotenv/config';
import { getPayload } from 'payload';
import config from '../src/payload.config';

const SLUGS_TO_REMOVE = ['prajashakti-news-portal', 'i-serve'];

async function main() {
  const payload = await getPayload({ config });

  for (const slug of SLUGS_TO_REMOVE) {
    const { docs } = await payload.find({
      collection: 'projects',
      where: { slug: { equals: slug } },
      limit: 10,
    });

    if (!docs.length) {
      console.log(`Not found: ${slug}`);
      continue;
    }

    for (const doc of docs) {
      await payload.delete({ collection: 'projects', id: doc.id });
      console.log(`Deleted: ${slug}`);
    }
  }

  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
