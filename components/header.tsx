import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* ロゴ部分 */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-blue-700">Core Nova</span>
              <span className="text-sm text-gray-600">AI Transformation</span>
            </div>
          </Link>

          {/* ナビゲーション */}
          <nav className="flex items-center space-x-8 ml-auto">
            <Link 
              href="#about" 
              className="text-gray-600 hover:text-blue-700 transition-colors duration-200 text-sm font-medium"
            >
              私たちについて
            </Link>
            <Link 
              href="#services" 
              className="text-gray-600 hover:text-blue-700 transition-colors duration-200 text-sm font-medium"
            >
              提供価値
            </Link>
            <Link 
              href="#contact" 
              className="text-gray-600 hover:text-blue-700 transition-colors duration-200 text-sm font-medium"
            >
              支援内容
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

