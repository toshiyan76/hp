import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-teal-700">
          Lago loge
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-teal-700">
            Home
          </Link>
          <Link href="/abouts" className="text-sm font-medium hover:text-teal-700">
            Abouts
          </Link>
          <Link href="/prowis" className="text-sm font-medium hover:text-teal-700">
            Prowis
          </Link>
          <Link href="/constact" className="text-sm font-medium hover:text-teal-700">
            Constact
          </Link>
          <Button size="sm" className="bg-teal-700 hover:bg-teal-800">
            GO
          </Button>
        </nav>
      </div>
    </header>
  )
}

