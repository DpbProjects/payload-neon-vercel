import { getArticleBySlug } from '@/lib/actions/articles'

import Image from 'next/image'
import LatestArticles from '@/components/LatestArticles'

export default async function Page({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug)

  console.log(article)

  const featuredImageUrl =
    typeof article.featuredImage === 'object' && article.featuredImage !== null
      ? article.featuredImage.url
      : ''

  return (
    <main className=" text-black grid md:grid-cols-5">
      <div className="w-full h-[16rem] relative col-span-5">
        {featuredImageUrl && (
          <Image
            src={featuredImageUrl}
            alt="A gentleman working on a laptop with a code editor."
            objectFit="cover"
            layout="fill"
          />
        )}
      </div>
      <LatestArticles />
      <div className=" p-6 col-start-2 col-end-5 mx-2 prose custom-prose">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">{article.title}</h1>
        {/* Render the rich text content for each feature item */}
        {article.content_html && (
          <div
            className="text-gray-600"
            dangerouslySetInnerHTML={{ __html: article.content_html }}
          />
        )}
      </div>
    </main>
  )
}
