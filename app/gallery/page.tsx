"use client"
import Films from "@/components/Films"
import Modelling from "@/components/Modelling";
import { useStore } from "@/components/State";
import Theater from "@/components/Theater";
import { motion } from "framer-motion";
import { useState } from "react";
type Props = {}

interface languagesState {
  language: string,
}

export default function Page({}: Props) {
  const language = useStore((state: languagesState) => state.language);

  const [whichGallery, setWhichGallery] = useState("m");
  const buttons = "bg-gray-400 px-3 py-1 rounded-full drop-shadow-lg";
  const selectedButton = "bg-red-400/80 px-3 py-1 rounded-full drop-shadow-lg";
  
  return (
    <div className="bg-pink-50 rounded-2xl m-2.5 p-4 h-screen flex flex-col justify-center gap-10">
        <div>
          <div className="absolute top-20 flex flex-col justify-center w-[85vw]">
            <motion.h2 
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration:2, delay: 1}} 
              className="text-center font-bold text-lg italic"> {language === "hun" ? "Képtár" : "Gallery"}
            </motion.h2>
            <div className="flex flex-row justify-center items-center gap-5 my-5">
              <button onClick={e => setWhichGallery('m')} className={`${whichGallery === "m" ? selectedButton : buttons}`}>{language === "hun" ? "Modellezés" : "Modelling"}</button>
              <button onClick={e => setWhichGallery('t')} className={`${whichGallery === "t" ? selectedButton : buttons}`}>{language === "hun" ? "Színház" : "Theater"}</button>
              <button onClick={e => setWhichGallery('f')} className={`${whichGallery === "f" ? selectedButton : buttons}`}>{language === "hun" ? "Filmek" : "Films"}</button>
            </div>
          </div>
          <div className="relative top-10">
            {whichGallery === "f" && <Films/>}
            {whichGallery === "m" && <Modelling/>}
            {whichGallery === "t" && <Theater/>}
          </div>
        </div>
    </div>
  )
}