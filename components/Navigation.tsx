"use client"
import { motion } from "framer-motion"
import Link from "next/link";
import { useState } from "react";

type Props = {}

export default function Navigation({}: Props) {
    const styling = "w-7 bg-pink-500 h-0.5";
    const [open, setOpen] = useState(false);
    console.log(open);
    
  return (
    <div>
        <div className="flex flex-col gap-1.5 absolute right-8 top-5 z-[999]" onClick={e => setOpen(!open)}>
            <motion.div className={styling}/>
            <motion.div className={styling}/>
            <motion.div className={styling}/>
        </div>
        {open && 
            <div className="h-screen bg-gradient-to-b from-indigo-200 via-red-200 to-yellow-100 w-full flex flex-col justify-center items-cneter gap-36 z-[999]">
                <Link href="/" onClick={e => setOpen(false)}>Home</Link>
                <Link href="/gallery" onClick={e => setOpen(false)}>Gallery</Link>
                <Link href="/videos" onClick={e => setOpen(false)}>Videos</Link>
            </div>
        }
    </div>
  )
}