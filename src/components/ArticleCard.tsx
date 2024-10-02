import { Article } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'

interface ArticleCardProps {
  article: Article
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const featuredImageUrl =
    typeof article.featuredImage === 'object' && article.featuredImage !== null
      ? article.featuredImage.url
      : ''

  return (
    <Link href={`/article/${article.slug}-${article.id}`}>
      <div className="h-full max-w-sm rounded overflow-hidden shadow-lg bg-white ">
        {featuredImageUrl && (
          <Image
            className="w-full h-48 object-cover"
            src={featuredImageUrl}
            alt={`Image for ${article.title}`}
            width={400} // Set a specific width for the image
            height={200} // Set a specific height for the image
            objectFit="cover"
          />
        )}

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{article.title}</div>
          <p className="text-gray-700 text-base">{article.excerpt}</p>
        </div>

        <div className="px-6 py-4">Read More</div>
      </div>
    </Link>
  )
}
