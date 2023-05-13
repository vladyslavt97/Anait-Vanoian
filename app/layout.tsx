import './globals.css'
import { Barlow } from 'next/font/google'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
const roboto = Barlow({ subsets: ['latin'], weight: ["400", "500"], style: ["italic", "normal"] })

export const metadata = {
  title: 'Hanna Kelemen',
  description: 'actress',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-gradient-to-b from-indigo-200 via-red-200 to-yellow-100 h-full`}>
      <Header/>
        {children}
      <Footer/>
      </body>
    </html>
  )
}
