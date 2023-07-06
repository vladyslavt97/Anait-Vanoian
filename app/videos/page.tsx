"use client"
import videos from "../../videos.json"
import interviews from "../../interviews.json"
import { useStore } from "@/components/State";
type Props = {}

interface languagesState {
  language: string,
}

export default function Page({}: Props) {
  const language = useStore((state: languagesState) => state.language);

  return (
    <div className="bg-gray-300 rounded-2xl m-2.5 p-4 flex flex-col overflow-x-hidden">
      <div className=" flex flex-col gap-5 mt-20 items-center mb-10">
        <h1>{language === "hun" ? "Videók" : "Videos"}</h1>
        {videos.map((video, i) => (
          <div key={i}>
            <iframe 
                src={`https://www.youtube.com/embed/${video.video}`} frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen 
                title="video1"
                className="rounded-lg shadow-lg"
                >
            </iframe>
        </div>
        ))}


        <h1>{language === "hun" ? "Interjúk" : "Interviews"}</h1>
        {interviews.map((video, i) => (
          <div key={i}>
            <iframe 
                src={`https://www.youtube.com/embed/${video.video}`} frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen 
                title="video1"
                className="rounded-lg shadow-lg"
                >
            </iframe>
        </div>
        ))}
      </div>
    </div>
  )
}