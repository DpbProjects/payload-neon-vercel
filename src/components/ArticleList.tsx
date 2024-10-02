import ArticleCard from './ArticleCard'

import { getAllArticles } from '@/lib/actions/articles'

import type { Article } from '@/payload-types'

interface BlogPostListProps {
  articles: Article[]
}

export default async function ArticleList() {
const articles = await getAllArticles()

  return (
    <div className="flex flex-row flex-wrap gap-4">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  )
}
