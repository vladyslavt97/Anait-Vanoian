"use client"
import { useStore } from "@/components/State";
import { motion } from "framer-motion";
import Image from "next/image";

interface languagesState {
  language: string,
}

export default function Home() {
  const language = useStore((state: languagesState) => state.language);
  return (
    <main 
    className="bg-[#fff8f9] rounded-2xl m-2.5 p-4 min-h-[87vh]"
    >
      <motion.h1 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:2}}
      className="font-bold text-center pt-16 pb-5 text-4xl text-black"
      style={{ textShadow: "1px 1px 10px rgba(255, 255, 255, 0.5)" }}
      >
        Kelemen Hanna
      </motion.h1>
      <motion.div
      initial={{opacity:0, 
        x:5, y:5
      }}
      animate={{opacity:1,
        x:0, y:0
      }}
      transition={{duration:1, delay: 0.2}}
      className="relative top-0 mx-2.5 w-full sm:w-full md:left-40 z-10"
      >
        <Image src="/hanna.jpeg" alt="" width={300} height={300} priority={true} className="rounded-2xl shadow-white"/>
      </motion.div>
      
    </main>
  )
}
