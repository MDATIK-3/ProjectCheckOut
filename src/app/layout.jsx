import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Catering Service',
  description: 'Your premium catering service solution',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-cyan-50 to-cyan-100 min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
