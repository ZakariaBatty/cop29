"use client"

import { usePathname, useRouter } from 'next/navigation'
import { ArrowLeft, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function NavigationButtons() {
  const pathname = usePathname()
  const router = useRouter()

  if (pathname === '/') {
    return (
      <>
        <footer className="w-full mx-auto">
          <div className="flex flex-col py-4 justify-center items-center ">
            <Image src="/images/Sponsor-all-2.png" alt="MTEDD Logo" className="" width={750}
              height={400} />
          </div>
        </footer>
      </>
    )
  }

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="fixed top-[38%] md:w-20 md:h-20 right-4 z-50 bg-black  "
        onClick={() => router.back()}
      >
        <ArrowLeft className="h-9 w-9 text-white hover:text-black" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-[37%] right-4  md:w-20 md:h-20  z-50 bg-black "
        onClick={() => router.push('/')}
      >
        <Home className="h-9 w-9 text-white hover:text-black" />
      </Button>
    </>
  )
}