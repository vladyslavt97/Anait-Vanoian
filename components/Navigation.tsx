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
    const styling = "w-7 bg-pink-500 h-0.5";

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
            className=" h-[30%] bg-gradient-to-b from-indigo-200 via-red-200 to-yellow-100 w-full flex flex-col justify-center items-center gap-10 z-40 fixed top-0 rounded-bl-lg rounded-br-lg text-purple-950"
            >
                <Link href="/" onClick={e => toggleOpen(false)} className={pathname === "/" ? "text-red-400 underline italic w-20 mx-auto font-bold" : "w-20 mx-auto font-mono"}>{language === "hun" ? "Életrajz" : "Biography"}</Link>
                <Link href="/gallery" onClick={e => toggleOpen(false)} className={pathname === "/gallery" ? "text-red-400 underline italic w-20 mx-auto font-bold" : "w-20 mx-auto font-mono"}>{language === "hun" ? "Képtár" : "Gallery"}</Link>
                <Link href="/videos" onClick={e => toggleOpen(false)} className={pathname === "/videos" ? "text-red-400 underline italic w-20 mx-auto font-bold" : "w-20 mx-auto font-mono"}>{language === "hun" ? "Videók" : "Videos"}</Link>
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