import { Header } from '@/components/header'
import { Nav } from '@/components/nav'
import { TopLeftImage } from '@/components/top-left-image'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import { FC, ReactNode } from 'react'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Marcos de Souza | Frontend e Mobile Developer',
  description: 'me',
}

type RootLayoutProps = {
  children: ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="pt-BR">
      <body className={sora.className}>
        <main className="page bg-site bg-no-repeat bg-cover text-white font-sora relative">
          <TopLeftImage />
          <Nav />
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout
