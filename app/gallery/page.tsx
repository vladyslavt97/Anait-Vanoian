"use client"
import Gallery from "@/components/Gallery"
import { useStore } from "@/components/State";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { motion } from "framer-motion";
type Props = {}

interface languagesState {
  language: string,
}

export default function Page({}: Props) {
  const language = useStore((state: languagesState) => state.language);
  const [timer, setTimer] = useState(false);

  setTimeout(() => {
    setTimer(true);
  }, 2000);

  return (
    <div className="bg-gradient-to-b from-white to-yellow-100/30 rounded-2xl m-2.5 p-4 h-screen flex flex-col justify-center gap-10">
        {timer ?
          <motion.h2 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:2, delay: 0.1}} 
            className="text-center font-bold text-lg italic bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent">    {language === "hun" ? "Képtár" : "Gallery"}
        <Gallery/>
          </motion.h2>
        :
        <div className="flex justify-center items-center">
        <ClipLoader color="#36d7b7" />
        </div>
        }

        <div>
        </div>
    </div>
  )
}