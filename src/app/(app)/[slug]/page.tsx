import Image from 'next/image'

import ArticleList from '@/components/ArticleList'

export default async function Page() {
  return (
    <main className=" text-black grid md:grid-cols-5">
      <div className="w-full h-[16rem] relative col-span-5">
        <Image
          src="/keyboard.jpg"
          alt="A gentleman working on a laptop with a code editor."
          objectFit="cover"
          layout="fill"
        />
      </div>

      <div className=" p-6 col-start-2 col-end-5 mx-2">
        {/* Blog Headline */}
        <h1 className="text-5xl font-bold text-gray-900 mb-12 text-center">Welcome to the payload blog!</h1>
        <ArticleList />
      </div>
    </main>
  )
}
