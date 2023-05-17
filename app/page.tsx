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
      transition={{duration:2}}
      className="font-bold text-center pt-16 pb-5 text-4xl italic bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent">
        Kelemen Hanna
      </motion.h1>
      <motion.div
      initial={{opacity:0, 
        // x:5, y:5
      }}
      animate={{opacity:1,
        // x:0, y:0
      }}
      transition={{duration:1, delay: 0.2}}
      className="relative top-0 mx-2.5 w-36 sm:w-64 md:left-40 border-2 border-purple-400 clip-path-trapezoid z-10"
      >
        <Image src="/gallery/1.jpg" alt="" width={200} height={200} priority={true}/>
      </motion.div>
      <motion.div
      initial={{opacity:0, x:5, y:5}}
      animate={{opacity:1, x:0, y:0}}
      transition={{duration:1, delay:0.5}}
      className="absolute top-36 right-5 mx-2.5 w-36 sm:w-64 border-2 border-pink-600 clip-path-trapezoid"
      >
        <Image src="/gallery/2.jpg" alt="" width={200} height={200} priority={true}/>
      </motion.div>
      {language === "hun" && <h1 className="font-bold text-center py-2 text-lg italic bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent">Életrajz</h1>}
      {language === "eng" && <h1 className="font-bold text-center py-2 text-lg italic bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent">Biography</h1>}
      <Bio/>
    </main>
  )
}
