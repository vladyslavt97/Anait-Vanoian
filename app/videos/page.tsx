import videos from "../../videos.json"
type Props = {}

export default function Page({}: Props) {

  return (
    <div className="bg-gradient-to-b from-white to-yellow-100/30 rounded-2xl m-2.5 p-4 flex flex-col overflow-x-hidden">
      <div className=" flex flex-col gap-5 mt-20 items-center mb-10">
        <h1>Videos</h1>
        {videos.map((video, i) => (
          <div key={i}>
            <iframe 
                src={`https://www.youtube.com/embed/${video.video}`} frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen 
                title="video1">
            </iframe>
        </div>
        ))}
      </div>
    </div>
  )
}