import Image from 'next/image'

export default async function Page() {
  const categories = [
    'Technology',
    'Health & Fitness',
    'Business',
    'Lifestyle',
    'Travel',
    'Food',
    'Education',
  ]

  return (
    <main className=" text-black grid md:grid-cols-5">
      <div className="w-full h-[28rem] relative col-span-5">
        <Image
          src="/david-pisnoy-RiGGe25WUw4-unsplash.jpg"
          alt="A gentleman working on a laptop with a code editor."
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div className="sticky top-0 p-5 w-full max-h-max">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index}>
              <a
                href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-slate-100 hover:text-black transition-colors duration-300"
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className=" p-6 col-start-2 col-end-5 mx-2">
        {/* Blog Headline */}
        <h1 className="text-5xl font-bold text-gray-900 mb-4">The Future of Web Development</h1>

        {/* Sub-text */}
        <p className="text-lg text-gray-600 mb-6">
          Understanding the trends and technologies that will shape the web.
        </p>

        {/* Paragraphs */}
        <div className="prose max-w-none space-y-6">
          <p>
            Web development is an ever-evolving field. New technologies, frameworks, and tools
            emerge constantly, redefining how websites and applications are built and experienced.
            As we move into the future, understanding the key trends in web development can help
            developers stay ahead of the curve and deliver exceptional user experiences.
          </p>

          <p>
            One significant trend is the rise of <strong>Jamstack architecture</strong>, which
            decouples the frontend and backend to create faster, more secure, and scalable web
            applications. With the increasing demand for performance, tools like Next.js, Gatsby,
            and serverless functions have gained immense popularity.
          </p>

          <p>
            Another key trend is the growing importance of <em>progressive web apps (PWAs)</em>.
            PWAs offer the ability to work offline, provide fast load times, and offer native
            app-like experiences. As more users access content via mobile devices, developers need
            to consider building responsive and efficient PWAs.
          </p>

          <p>
            In addition, the adoption of AI and machine learning in web development is transforming
            how websites interact with users. Features like personalized recommendations, chatbots,
            and predictive search are increasingly becoming the norm, offering enhanced user
            experiences and engagement.
          </p>

          <p>
            The rise of no-code and low-code platforms is another trend that&apos;s making web
            development more accessible. These tools allow non-developers to build functional
            websites and applications with drag-and-drop interfaces, speeding up development cycles
            and lowering barriers to entry.
          </p>

          <p>
            As web development continues to evolve, staying updated with these trends and mastering
            the necessary skills will be crucial for developers. With the rise of new technologies,
            the web is set to become more interactive, dynamic, and user-centric in the years to
            come.
          </p>
        </div>
      </div>
    </main>
  )
}
