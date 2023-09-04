import {cn} from '@/lib/utils'
import './globals.css'
import type {Metadata} from 'next'
import {Montserrat} from 'next/font/google'
import Navbar from '@/components/Navbar'

const montserrat = Montserrat({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Demyst Bank',
  description: 'Simple banking for everyone',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={cn(montserrat.className, 'flex h-screen flex-col bg-background')}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
