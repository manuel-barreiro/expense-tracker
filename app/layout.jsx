import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata = {
  title: 'Expense Tracker',
  description: 'Track your expenses with this simple app.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className={`${inter.className} bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900`}>{children}</body>
    </html>
  )
}
