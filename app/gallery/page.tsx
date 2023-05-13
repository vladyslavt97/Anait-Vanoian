"use client"
import Gallery from "@/components/Gallery"
import { useStore } from "@/components/State";

type Props = {}

interface languagesState {
  language: string,
}

export default function page({}: Props) {
  const language = useStore((state: languagesState) => state.language);

  return (
    <div className="bg-gradient-to-b from-white to-yellow-100/30 rounded-2xl m-2.5 p-4 h-screen flex flex-col justify-center gap-10">
        <h2 className="text-center font-bold text-lg italic bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent">{language === "hun" ? "Képtár" : "Gallery"}</h2>
        <div>
            <Gallery/>
        </div>
    </div>
  )
}