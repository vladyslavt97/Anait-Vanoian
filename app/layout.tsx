import './globals.css'
import { Vollkorn } from 'next/font/google'
import Footer from "@/components/Footer";
import Header from "@/components/Header";


const roboto = Vollkorn({ subsets: ['latin'], weight: ["400", "500"], style: ["italic", "normal"] })

export const metadata = {
  title: 'Hanna Kelemen',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-gray-700 h-full overflow-x-hidden`}>
      <Header/>
        {children}
      <Footer/>
      </body>
    </html>
  )
}
