import { Facebook, Twitter, LinkedinIcon as LinkedIn } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © 2025 Core Nova. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-blue-700 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-700 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-700 transition-colors">
              <LinkedIn size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

