import NavigationButtons from '@/components/ui/navigations-bottun'
import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'cop29',
  description: 'Cop29 Baku Azerbaijan ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen w-full">
          {/* header section*/}
          <header className="w-full mx-auto bg-[#56b2e1]">
            <div className="flex flex-col pr-6 pl-6  justify-center items-center ">
              <a href="/">
                <Image src="/images/MTEDD2.png" alt="MTEDD Logo" className="py-4 mb-2" width={650}
                  height={400} />
              </a>
              <a href="/" rel="noopener noreferrer">
                <Image src="/images/cop272.svg" alt="COP28 Logo" className="h-[100px]" width={500}
                  height={300} />
              </a>
            </div>
          </header>
          <main className="container mx-auto py-2">
            {children}
          </main>
          <NavigationButtons />
        </div>
      </body>
    </html>
  )
}