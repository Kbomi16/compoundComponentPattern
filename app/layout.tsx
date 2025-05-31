'use client'

import { useRouter } from 'next/router'
import './globals.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <html lang="en">
      <body>
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-4 p-10">
          {children}
          {!isHome && (
            <Link
              href={'/'}
              className="mt-30 rounded-2xl border-2 border-gray-200 px-8 py-4 transition-all hover:bg-gray-200"
            >
              Go to Home
            </Link>
          )}
        </div>
      </body>
    </html>
  )
}
