"use client"
import { motion } from "framer-motion"
import Link from "next/link";
import { useStore } from "./State";
import { usePathname } from 'next/navigation';

type Props = {}
interface openState {
    open: false;
  setOpen: (open: boolean) => void;
}

interface languagesState {
  language: string,
}

export default function Navigation({}: Props) {
  const language = useStore((state: languagesState) => state.language);
    const pathname = usePathname();
    
    const open = useStore((state: openState) => state.open);
    const setOpen = useStore((state: openState) => state.setOpen);
    const styling = "w-7 bg-blue-950 h-0.5";

    const toggleOpen = (value: boolean) => {
        setOpen(value);
    }
    
  return (
    <div>
        <div className={`flex flex-col gap-1.5 right-8 top-5 z-50 ${open ? "fixed" : "absolute"}`} onClick={e => toggleOpen(!open)}>
            <motion.div 
            animate={{rotate: open ? -45 : 0, y: open ? 14 : 0,}}
            className={styling}/>
            <motion.div 
            animate={{opacity: open ? 0 : 1}}
                transition={{ duration: 0.1 }}
                className={styling}/>
            <motion.div 
            animate={{
                rotate: open ? 45 : 0,
                y: open ? -1.5 : 0,
            }}
            className={styling}/>
        </div>
        {open && 
            <motion.div 
            initial={{y:-270}}
            animate={{y:0}}
            transition={{duration:1}}
            className=" h-[30%] bg-gradient-to-b from-green-700/80 to-green-900/50 w-full flex flex-col justify-center items-center gap-10 z-40 fixed top-0 rounded-bl-lg rounded-br-lg text-white"
            >
              <motion.div
              initial={{x:-10, opacity:0}}
              animate={{x:0, opacity:1}}
              transition={{duration:1, delay:0.6}}
              >
                <Link href="/" onClick={e => toggleOpen(false)} className={pathname === "/" ? "bg-blue-400/50 px-2 py-1 rounded-full italic w-20 mx-auto font-bold" : "w-20 mx-auto font-mono"}>{language === "hun" ? "Életrajz" : "Biography"}</Link>
              </motion.div>
              <motion.div
              initial={{x:-20, opacity:0}}
              animate={{x:0, opacity:1}}
              transition={{duration:1, delay:0.8}}
              >
                <Link href="/gallery" onClick={e => toggleOpen(false)} className={pathname === "/gallery" ? "bg-blue-400/50 px-2 py-1 rounded-full italic w-20 mx-auto font-bold" : "w-20 mx-auto font-mono"}>{language === "hun" ? "Képtár" : "Gallery"}</Link>
              </motion.div>
              <motion.div
              initial={{x:-30, opacity:0}}
              animate={{x:0, opacity:1}}
              transition={{duration:1, delay:1}}
              >
                <Link href="/videos" onClick={e => toggleOpen(false)} className={pathname === "/videos" ? "bg-blue-400/50 px-2 py-1 rounded-full italic w-20 mx-auto font-bold" : "w-20 mx-auto font-mono"}>{language === "hun" ? "Videók" : "Videos"}</Link>
              </motion.div>
            </motion.div>
        }
        {open && 
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        className="fixed top-0 h-screen bg-black/60 w-screen z-20" onClick={e => toggleOpen(false)}
        />
        }
    </div>
  )
}