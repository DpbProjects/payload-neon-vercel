import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'

import { extractArticleId } from '@/utils'

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

export async function getArticleBySlug(slug: string) {
  'use server'

  const payload = await getPayloadHMR({ config: configPromise })

  const article = payload.findByID({
    collection: 'articles',
    id: extractArticleId(slug),
  })

  revalidatePath('layout')

  return await article
}
