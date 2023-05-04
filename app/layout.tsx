import './globals.css'
import { Inter } from 'next/font/google'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anait Vanoian',
  description: 'Violinist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
        {children}
      <Footer/>
      </body>
    </html>
  )
}
