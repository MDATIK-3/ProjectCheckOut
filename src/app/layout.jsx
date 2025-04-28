'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import { OrderProvider } from './contexts/OrderContext'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <OrderProvider>
          <Toaster position="top-center" />
          {children}
        </OrderProvider>
      </body>
    </html>
  )
}
