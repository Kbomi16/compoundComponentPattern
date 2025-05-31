import Link from 'next/link'

export default function Home() {
  return (
    <>
      {' '}
      <Link
        href="/antd"
        className="rounded-2xl border-2 border-gray-200 px-8 py-4 transition-all hover:bg-gray-200"
      >
        antd
      </Link>
      <Link
        href="/compound"
        className="rounded-2xl border-2 border-gray-200 px-8 py-4 transition-all hover:bg-gray-200"
      >
        compound
      </Link>
      <Link
        href="/headless"
        className="rounded-2xl border-2 border-gray-200 px-8 py-4 transition-all hover:bg-gray-200"
      >
        headless
      </Link>
      <Link
        href="/mui"
        className="rounded-2xl border-2 border-gray-200 px-8 py-4 transition-all hover:bg-gray-200"
      >
        mui
      </Link>
    </>
  )
}
