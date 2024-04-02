import './globals.css'
import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Privacy Quest',
  description: 'CS 492 Project to test your Privacy Awareness',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='antialiased'>
      <body className={ubuntu.className}>{children}</body>
    </html>
  )
}
