import './globals.css'
import { Assistant } from 'next/font/google'
import Footer from "@/components/Footer";
import Header from "@/components/Header";


const roboto = Assistant({ subsets: ['latin'], weight: ["400", "500"], style: ["normal"] })

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
      <body className={`${roboto.className} bg-gray-600 h-full overflow-x-hidden`}>
      <Header/>
        {children}
      <Footer/>
      </body>
    </html>
  )
}
