
type Props = {}

export default function HunBio({}: Props) {

    const divstyle = " bg-pink-100/50 p-2 rounded-2xl border-yellow-500/30 border-2 mt-5 ";


  return (
    <div className="sm:flex flex-col md:px-20 lg:px-44 text-purple-950">
        I was born on May 19, 2003 in Kaposvár, in a family of musicians.
        My musical studies: I played the piano until 2016, in 2014 I won first place at the National Budapest Piano Competition.
        <br/>
        <br/>
        Since 2016, I have been attending Margit Földessy&lsquo;s art school.
        <br/>
        <br/>
        <br/>


        <span className="flex justify-center font-bold">Filmes szerepeim:</span> 
        <br/>
        <div className={divstyle} id="thevideosdivs">
            - Szilágyi Fanni : Orsi és Tensinhan (main role) 2018
            <iframe
                src="https://player.vimeo.com/video/456170189" frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen 
                title="video1"
                className="py-4 mx-auto w-64"
            />
        </div>

        - Tóth Barnabás : Those who stayed (supporting role) 2018
        <br/>
        <br/>
        <div className={divstyle} id="thevideosdivs">
            - Szabó Szonja : Vércsék (main role) 2019
            <iframe
                src="https://player.vimeo.com/video/398000995" frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen 
                title="video1"
                className="py-4 mx-auto w-64"
            />
        </div>

        <div className={divstyle} id="thevideosdivs">
            - Csukás Márton : What are we waiting? (main role) 2020
            <iframe
                src="https://www.youtube.com/embed/j5MC0O7m4Zk" frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen 
                title="video1"
                className="py-4 mx-auto w-64"
            />
        </div>
        <br/>


        <span className="flex justify-center font-bold">My theater roles:</span> 
        <br/>
        - Children&lsquo;s opera by Zsolt Serei - MÜPA Festival Theater - &ldquo;Counter&ldquo;<br/>
        Premiere: 2017
        <br/>
        <br/>
        <div className={divstyle} id="thevideosdivs">
            - Romeo and Juliet - Pest Hungarian Theater - Juliet
            <iframe
                src="https://www.youtube.com/embed/SGCUxyYyr6g" frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen 
                title="video1"
                className="py-4 mx-auto w-64"
            />
        </div>
        <br/>
        Director: Károly Eperjes<br/>
        Premiere: September 28, 2020
        <br/>
        <br/>
        - Run Out in the Hug - Madách Theater - Csinszka<br/>
        Director: Ádám Horgas<br/>
        Expected premiere: July - August
        <br/>
        <br/>
        <br/>


        <span className="flex justify-center font-bold">My hobbies: </span> 
        <br/>
        - literature in English (intermediate language exam)<br/>
        - modeling :<br/>
        &nbsp;&nbsp;• &nbsp;2018 - Tokyo - Two months<br/>
        &nbsp;&nbsp;• &nbsp;2019 - Tokyo - two months<br/>
        Publication of domestic newspapers: Instyle, MarieClaire, Elle
        <br/>
        <br/>
        <br/>


        <span className="flex justify-center font-bold">Singing: </span> 
        <br/>
        - Bakáts Téri School choir<br/>
        - Kodály Zoltán Kodály School<br/>
        - in Germany - Cologne Cathedral Choir - 2017-19
        <br/>
        <br/>
        - Singing Jazz/Pop songs<br/>
        - piano<br/>
        - guitar
        
    </div>
  )
}