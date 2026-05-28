import path from 'path';
import { fileURLToPath } from 'url';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { buildConfig } from 'payload';
import sharp from 'sharp';

import { Certifications } from './payload/collections/Certifications';
import { Education } from './payload/collections/Education';
import { Experience } from './payload/collections/Experience';
import { Media } from './payload/collections/Media';
import { Projects } from './payload/collections/Projects';
import { Skills } from './payload/collections/Skills';
import { Users } from './payload/collections/Users';
import { SiteSettings } from './payload/globals/SiteSettings';
import { s3StoragePlugin } from './payload/plugins/s3';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname, 'app/(payload)/admin'),
    },
  },
  collections: [Users, Media, Projects, Experience, Skills, Certifications, Education],
  plugins: [s3StoragePlugin()],
  globals: [SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
});
