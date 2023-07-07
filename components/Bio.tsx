"use client"
import EngBio from "./EngBio";
import HunBio from "./HunBio";
import { useStore } from "./State";

type Props = {}
interface languagesState {
  language: string,
}
export default function Bio({}: Props) {
    const language = useStore((state: languagesState) => state.language);
  return (
    <div>
    {language === "hun" && <HunBio/>}
    {language === "eng" && <EngBio/>}
    </div>
  )
}