"use client"

import { usePathname, useRouter } from 'next/navigation'
import { ArrowLeft, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NavigationButtons() {
  const pathname = usePathname()
  const router = useRouter()

  if (pathname === '/') {
    return null
  }

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="fixed top-[40%] right-4 z-50 bg-black  "
        onClick={() => router.back()}
      >
        <ArrowLeft className="h-4 w-4 text-white hover:text-black" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-[47%] right-4 z-50 bg-black "
        onClick={() => router.push('/')}
      >
        <Home className="h-4 w-4 text-white hover:text-black" />
      </Button>
    </>
  )
}