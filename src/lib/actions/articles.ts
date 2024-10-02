import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'

import { revalidatePath } from 'next/cache'

export async function getAllArticles() {
  'use server'

  const payload = await getPayloadHMR({ config: configPromise })

  const articles = payload.find({
    collection: 'articles',
  })

  revalidatePath('layout')

  return (await articles).docs
}
