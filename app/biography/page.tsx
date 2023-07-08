"use client"
import Image from "next/image";
import EngBio from "@/components/EngBio";
import HunBio from "@/components/HunBio";
import { useStore } from "@/components/State";
import { motion } from "framer-motion";

type Props = {}

interface languagesState {
  language: string,
}

export default function Page({}: Props) {
  const language = useStore((state: languagesState) => state.language);
  
  return (
    <div className="bg-pink-50 rounded-2xl m-2.5 p-4 ">
      <h1 className="font-bold text-center py-2 text-xl text-black mt-14" style={{ textShadow: "1px 1px 10px rgba(255, 255, 255, 0.5)" }}>{language === "hun" ? "Életrajz" : "Biography"}</h1>
        <motion.div
      initial={{opacity:0, 
        x:5, y:5
      }}
      animate={{opacity:1,
        x:0, y:0
      }}
      transition={{duration:1, delay: 0.2}}
      className="relative w-full flex justify-center"
      >
        <Image src="/1.jpg" alt="" width={300} height={300} priority={true} className="rounded-2xl shadow-white my-5 w-[290px]"/>
      </motion.div>
        {language === "hun" ? <HunBio/> : <EngBio/>}
    </div>
  )
}