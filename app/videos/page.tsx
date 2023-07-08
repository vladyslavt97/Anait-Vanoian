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
    <div className="bg-pink-50 rounded-2xl m-2.5 p-4 flex flex-col overflow-x-hidden min-h-[87vh] justify-center">
      <h1 className="text-center mt-14">{language === "hun" ? "Videók" : "Videos"}</h1>
      <div className=" flex flex-col gap-5 mt-5 md:mt-10 items-center mb-10 md:flex-row md:flex-wrap md:justify-center">
        {videos.map((video, i) => (
          <div key={i} className="xl:w-1/4">
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


        <h1 className="text-center mt-14 md:mt-32">{language === "hun" ? "Interjúk" : "Interviews"}</h1>
        <div className=" flex flex-col gap-5 mt-5 md:mt-10 items-center mb-10 md:flex-row md:flex-wrap md:justify-center">
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