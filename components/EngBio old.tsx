
type Props = {}

export default function HunBio({}: Props) {

    const divstyle = "rounded-2xl mt-5 ";


  return (
    <div className="sm:flex flex-col md:px-20 lg:px-44 text-blue-900">
        I was born on May 19, 2003 in Kaposvár, in a family of musicians!
        My musical studies: I played the piano until 2016, in 2014 I won first place at the National Budapest Piano Competition.
        <br/>
        <br/>
        Since 2016, I have been attending Margit Földessy&lsquo;s art school.
        <br/>
        <br/>
        <br/>


        <span className="flex justify-center font-bold text-black" style={{ textShadow: "1px 1px 10px rgba(255, 255, 255, 0.5)" }}>Filmes szerepeim:</span> 
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
        <br/>
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


        <span className="flex justify-center font-bold text-black" style={{ textShadow: "1px 1px 10px rgba(255, 255, 255, 0.5)" }}>My theater roles:</span> 
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

        <p>In 2020, I portrayed the character of Juliet in Shakespeare&apos;s play Romeo and Juliet at the Pesti Magyar Színház, directed by Károly Eperjes. The production ran for two years.<br/><br/>

        In 2021, I starred in the four-character film “Lost in the Hug” (Elfogyni az Ölelésben), a production about poet Endre Ady, directed by Ádám Horgas, at the Madách Színház. I played the role of Csinszka (portrayed by Berta Boncza).<br/><br/>

        In the same year, I performed as Cécile de Volange in the musical Dangerous Liaisons at the Operett Theatre, directed by Csaba Kiss. This production ran for two years aswell.<br/><br/>

        In 2022, I took on the leading role of ”Vörös” in a 20-episode series titled “Who Are You?” (Ki vagy Te?), aired on RTL+.<br/><br/>

        In 2023, I portrayed Roxie Hart in the musical “Chicago” at the Soproni Petőfi Theatre, directed by Károly Eperjes.<br/><br/>

        This summer in 2023, I filmed my first period feature film, playing the protagonist Marika in “Almost a Bride” (Majdnem Menyasszony), directed by József Pacskovszky.</p>


        <span className="flex justify-center font-bold text-black" style={{ textShadow: "1px 1px 10px rgba(255, 255, 255, 0.5)" }}>My hobbies: </span> 
        <br/>
        - literature in English (intermediate language exam)<br/>
        - modeling :<br/>
        &nbsp;&nbsp;• &nbsp;2018 - Tokyo - Two months<br/>
        &nbsp;&nbsp;• &nbsp;2019 - Tokyo - two months<br/>
        Publication of domestic newspapers: Instyle, MarieClaire, Elle
        <br/>
        <br/>
        <br/>


        <span className="flex justify-center font-bold text-black" style={{ textShadow: "1px 1px 10px rgba(255, 255, 255, 0.5)" }}>Singing: </span> 
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