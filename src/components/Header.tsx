import Link from 'next/link'

export default function Header() {
  return (
    <header className=" flex gap-4 py-5 px-5 border-b-2 text-black">
      <Link href="/" className="text-xl font-bold cursor-pointer">
        <h1>Payload Blog</h1>
      </Link>
      {/* <Link href="/add" className="text-xl font-light cursor-pointer">
        Blog
      </Link> */}
    </header>
  )
}
