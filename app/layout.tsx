import "./globals.css"
import { Noto_Sans_JP } from 'next/font/google'

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <title>CoreNova - AIで企業の成長を支援</title>
        <meta name="description" content="CoreNovaは、最新のAI技術を活用して中小企業の成長を支援します。" />
      </head>
      <body className={notoSansJP.className}>{children}</body>
    </html>
  )
}

