import { getArticleBySlug } from '@/lib/actions/articles'

export default async function Page({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug)

  return (
    <div>
      <pre>{JSON.stringify(article, null, 2)}</pre>
    </div>
  )
}
