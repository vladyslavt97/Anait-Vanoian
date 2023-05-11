import Bio from "@/components/Bio";
import Gallery from "@/components/Gallery";


export default function Home() {
  return (
    <main className="bg-gradient-to-b from-white to-yellow-100/30 rounded-2xl m-2.5 p-4">
      <h1 className="font-bold text-center py-10 text-4xl italic bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent">Kelemen Hanna</h1>
      <Gallery/>
      <h1 className="font-bold text-center py-2 text-lg italic bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent">életrajz</h1>
      <Bio/>
    </main>
  )
}
