"use client"
import Image from "next/image"
import { useStore } from "./State";

type Props = {}
interface languagesState {
  language: string,
}
export default function Footer({}: Props) {
  const language = useStore((state: languagesState) => state.language);
  return (
    <div className="relative bottom-0 bg-yellow-400/50 m-3 rounded-lg flex flex-col gap-5 p-3 shadow-xl">
      <div>
        <h3 className="italic text-gray-700">{language === "eng" ? "Get in touch:" : "Felveszi a kapcsolatot:"}</h3>
        <h3 className="text-gray-700">hannakelemen1@gmail.com</h3>
      </div>
      
      <div className="flex flex-row justify-center gap-5">
            <a href="https://www.instagram.com/hanna_kelemen_/" target="_blank" rel="noopener noreferrer" className="flex justify-center">
                <Image width={30} height={30} src="/instagram.png" alt=""/>
            </a>
            <a href="https://www.facebook.com/hanna.kelemen.71" target="_blank" rel="noopener noreferrer" className="flex justify-center">
                <Image width={30} height={30} src="/facebook.png" alt=""/>
            </a>
        </div>
    </div>
  )
}