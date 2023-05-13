"use client"
import Bio from "@/components/Bio";
import { useStore } from "@/components/State";

interface languagesState {
  language: string,
}

export default function Home() {
  const language = useStore((state: languagesState) => state.language);
    console.log('languagelanguage', language);
  return (
    <main className="bg-gradient-to-b from-white to-yellow-100/30 rounded-2xl m-2.5 p-4">
      <h1 className="font-bold text-center py-10 text-4xl italic bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent">Kelemen Hanna</h1>
      {language === "hun" && <h1 className="font-bold text-center py-2 text-lg italic bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent">életrajz</h1>}
      {language === "eng" && <h1 className="font-bold text-center py-2 text-lg italic bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent">biography</h1>}
      <Bio/>
    </main>
  )
}
