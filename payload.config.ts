import path from 'path'
import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'

import { Users } from './src/payload/collections/Users'
import { Projects } from './src/payload/collections/Projects'
import { About } from './src/payload/collections/About'
import { Certifications } from './src/payload/collections/Certifications'
import { Contact } from './src/payload/collections/Contact'

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || 'change-this-in-env',
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || `file:${path.resolve(process.cwd(), 'payload.db')}`,
    },
  }),
  admin: {
    user: Users.slug,
  },
  collections: [Users, Projects, About, Certifications, Contact],
  typescript: {
    outputFile: path.resolve(process.cwd(), 'payload-types.ts'),
  },
})
