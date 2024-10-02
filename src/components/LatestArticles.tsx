import Link from 'next/link'

import { getAllArticles } from '@/lib/actions/articles'

export default async function LatestArticles() {
  const allArticles = await getAllArticles()

  return (
    <div className="sticky top-0 p-5 w-full max-h-max">
      <h2 className="text-xl font-bold mb-4">Latest Articles</h2>
      <ul className="space-y-2">
        {allArticles.map((article, index) => (
          <Link
            href={`/article/${article.slug}`}
            key={index}
            className="block px-3 py-2 rounded-md text-gray-700 hover:bg-slate-100 hover:text-black transition-colors duration-300"
          >
            {article.title}
          </Link>
        ))}
      </ul>
    </div>
  )
}
