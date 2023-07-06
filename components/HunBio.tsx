
type Props = {}

export default function HunBio({}: Props) {
    const divstyle = " bg-gray-400/50 p-2 rounded-2xl mt-5 ";
  return (
    <div className="sm:flex flex-col md:px-20 lg:px-44 text-blue-900">
        2003 május 19.-én születtem Kaposváron, zenészcsaládban.
        Zenei tanulmányaim: 2016-ig zongoráztam, 2014-ben első helyezést értem el az Országos budapesti zongoraversenyen.
        <br/>
        <br/>
        2016 óta Földessy Margitot szinitanodájába járok.
        <br/>
        <br/>
        <br/>


        <span className="flex justify-center font-bold text-black" style={{ textShadow: "1px 1px 10px rgba(255, 255, 255, 0.5)" }}>Filmes szerepeim:</span> 
        <div className={divstyle} id="thevideosdivs">
            - Szilágyi Fanni : Orsi és Tensinhan (főszerep) 2018
            <iframe
                src="https://player.vimeo.com/video/456170189" frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen 
                title="video1"
                className="py-4 mx-auto w-64"
            />
        </div>
        <br/>
        - Tóth Barnabás : Akik Maradtak (mellékszerep) 2018
        <br/>
        <br/>
        <div className={divstyle} id="thevideosdivs">
            - Szabó Szonja : Vércsék (főszerep) 2019
            <iframe
                src="https://player.vimeo.com/video/398000995" frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen 
                title="video1"
                className="py-4 mx-auto w-64"
            />
        </div>

        <div className={divstyle} id="thevideosdivs">
            - Csukás Márton : Mire Várunk? (főszerep) 2020
            <iframe
                src="https://www.youtube.com/embed/j5MC0O7m4Zk" frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen 
                title="video1"
                className="py-4 mx-auto w-64"
            />
        </div>
        <br/>
        <br/>

        <span className="flex justify-center font-bold text-black" style={{ textShadow: "1px 1px 10px rgba(255, 255, 255, 0.5)" }}>Színházi szerepeim:</span> 
        - Serei Zsolt gyermek operája - MÜPA Fesztivál Színház - “Számláló”<br/>
        Premier : 2017 
        <br/>
        <br/>
        <div className={divstyle} id="thevideosdivs">
            - Rómeó és Júlia - Pesti Magyar Színház - Júlia
            <iframe
                src="https://www.youtube.com/embed/SGCUxyYyr6g" frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen 
                title="video1"
                className="py-4 mx-auto w-64"
            />
        </div>
        <br/>
        Rendező : Eperjes Károly<br/>
        Premier : 2020 szeptember 28
        <br/>
        <br/>
        - Elfogyni az Ölelésben - Madách Színház - Csinszka<br/>
        Rendező : Horgas Ádám<br/>
        Várható premier : Július - augusztus
        <br/>
        <br/>
        <br/>
        - Chicago- Sopron Petőfi Színház- Roxie Hart<br/>
        Rendező: Eperjes Károly<br/>
        Premier: April 22nd
        <br/>
        <br/>
        <br/>
        - Veszedelmes Viszonyok<br/>
        Cécile de Volanges<br/>
        Rendező: Kiss Csaba<br/>
        Premier- 2022 január 28
        <br/>
        <br/>
        <br/>

        <span className="flex justify-center font-bold text-black" style={{ textShadow: "1px 1px 10px rgba(255, 255, 255, 0.5)" }}>Hobbijaim: </span> 
        - angol nyelvű irodalom (középfokú nyelvvizsga)<br/>
        - modellkedés :<br/>
        - 2018 - Tokio - Két hónap <br/>
        - 2019 - Tokio - két hónap<br/>
        Hazai lapok megjelenés : Instyle, MarieClaire, Elle
        <br/>
        <br/>
        <br/>


        <span className="flex justify-center font-bold text-black" style={{ textShadow: "1px 1px 10px rgba(255, 255, 255, 0.5)" }}>Éneklés: </span> 
        - Bakáts Téri Iskola kórusa<br/>
        - Kodály Zoltán Iskola kórusa<br/>
        - Németországban - Kölni Dóm kórus - 2017-19
        <br/>
        <br/>
        - Jazz/Pop dalok éneklése<br/>
        - zongora<br/>
        - gitár
        <br/>
        <br/><br/>
    </div>
  )
}