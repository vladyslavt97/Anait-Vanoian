"use client"

import EngBio from "@/components/EngBio";
import HunBio from "@/components/HunBio";
import { useStore } from "@/components/State";

type Props = {}

interface languagesState {
  language: string,
}

export default function Page({}: Props) {
  const language = useStore((state: languagesState) => state.language);
  
  return (
    <div className="bg-pink-50 rounded-2xl m-2.5 p-4 ">
        {language === "hun" && <h1 className="font-bold text-center py-2 text-xl text-black mt-10" style={{ textShadow: "1px 1px 10px rgba(255, 255, 255, 0.5)" }}>Életrajz</h1>}
        {language === "eng" && <h1 className="font-bold text-center py-2 text-xl text-black mt-10" style={{ textShadow: "1px 1px 10px rgba(255, 255, 255, 0.5)" }}>Biography</h1>}
        {language === "hun" && <HunBio/>}
        {language === "eng" && <EngBio/>}
    </div>
  )
}