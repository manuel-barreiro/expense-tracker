import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata = {
  title: 'MB Expense Tracker',
  description: 'Track your expenses with this simple app.',
  themeColor: '#130c24',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900`}>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  )
}
