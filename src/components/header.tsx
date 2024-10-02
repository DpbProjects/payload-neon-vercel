import Link from 'next/link'

export default function Header() {
  return (
    <header className=" flex gap-4 py-5 px-5 border-b-2 text-black">
      <Link href="/" className="text-xl font-bold">
        <h1>Payload Blog</h1>
      </Link>
      <Link href="/add" className="text-xl font-light">
        Blog
      </Link>
    </header>
  )
}
