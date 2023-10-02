"use client"
import { useStore } from "@/components/State";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface languagesState {
  language: string,
  val: boolean
}
//check
export default function Home() {
  const language = useStore((state: languagesState) => state.language);
  const val = useStore((state: languagesState) => state.val);

  return (
    <main 
    className="bg-[#fff8f9] rounded-2xl m-2.5 p-4 min-h-[87vh] sm:grid grid-cols-2 gap-4 items-center md:p-0"
    >
      <motion.h1 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:2, delay: 0.4}}
      className="font-bold text-center pt-16 pb-5 text-4xl md:text-[50px] text-red-400 md:leading-relaxed"
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
      whileHover={{ scale: 1.05 }}
      transition={{duration:2, delay: 0.2}}
      className="w-full z-10 flex justify-center "
      >
        <Image src="/hanna.jpeg" alt="" width={300} height={300} priority={true} className="rounded-2xl shadow-white h-64 object-cover" style={{ objectPosition: 'top' }}/>
      </motion.div>
      {val && 
      <>
        <div className="rounded-xl bg-red-100/50 mt-10 px-5 flex justify-center items-center flex-col">
          <Link href="https://gofund.me/f4a57d59" target="_blank"><Image src="/gofundme.png" alt="" width={100} height={100} priority={true} className="rounded-2xl"/></Link>
          <Link href="https://gofund.me/f4a57d59" target="_blank"><h1 className="text-center text-lg">{language === "hun" ? "Segíts befejezni tanulmányaimat Glasgow-ban." : "Help me finish my studies in Glasgow."}</h1></Link>
          <h2 className="italic mb-2 flex flex-row text-sm justify-center items-center">{language === "hun" ? "Adományozáshoz kattintson ide: " : "click here to donate: "} <Link href="https://gofund.me/f4a57d59" target="_blank" className="font-bold not-italic ml-2"><h1 className=" bg-gradient-to-b hover:from-orange-500/70 hover:to-yellow-500/70 from-yellow-500/90 to-orange-500/90 py-1 px-2 rounded-full text-center animate-pulse">{language === "hun" ? "Adományoz" : "Donate"}</h1></Link></h2> 
        </div>

        <div className="rounded-xl bg-red-100/50 mt-10 px-5">
          <h1 className="text-center text-lg">{language === "hun" ? "Cikkek" : "Articles"}</h1>
          <h2 className="italic">{language === "hun" ? "Elkezdődött a Majdnem menyasszony forgatása..." : `Filming of Almost the Bride has begun...`} <Link href="https://kultura.hu/elkezdodott-a-majdnem-menyasszony-forgatasa/" className="font-bold not-italic">{language === "hun" ? "Olvass tovább" : "read more"}</Link></h2> 
        </div>
      </>
      }
      
    </main>
  )
}
