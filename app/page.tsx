"use client"
import Bio from "@/components/Bio";
import { useStore } from "@/components/State";
import { motion } from "framer-motion";
import Image from "next/image";

interface languagesState {
  language: string,
}

export default function Home() {
  const language = useStore((state: languagesState) => state.language);
  return (
    <main className="bg-gradient-to-b from-white to-yellow-100/30 rounded-2xl m-2.5 p-4">
      <motion.h1 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:1}}
      className="font-bold text-center pt-16 pb-5 text-4xl italic bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent">Kelemen Hanna</motion.h1>
      <motion.div
      initial={{opacity:0, x:50}}
      animate={{opacity:1, x:0, transition: {
        type: "spring",
        stiffness: 80,
      }}}
      transition={{duration:1}}
      >
        <Image src="/gallery/1.jpg" alt="" width={400} height={400} className="relative top-0 rounded-full w-full px-2.5"/>
      </motion.div>
      {language === "hun" && <h1 className="font-bold text-center py-2 text-lg italic bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent">életrajz</h1>}
      {language === "eng" && <h1 className="font-bold text-center py-2 text-lg italic bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent">biography</h1>}
      <Bio/>
    </main>
  )
}
