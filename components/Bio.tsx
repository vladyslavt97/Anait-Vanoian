import Image from "next/image"
type Props = {}

export default function Bio({}: Props) {
  return (
    <p className="p-4">
        2003 május 19.-én születtem Kaposváron, zenészcsaládban.
        Zenei tanulmányaim: 2016-ig zongoráztam, 2014-ben első helyezést értem el az Országos budapesti zongoraversenyen.
        2016 óta Földessy Margitot szinitanodájába járok.
        <br/>
        <br/>
        Filmes szerepeim:
        <br/>
        <br/>
        -Szilágyi Fanni : Orsi és Tensinhan (főszerep) 2018
        {/* https://player.vimeo.com/video/456170189 */}
        <iframe
            src="https://player.vimeo.com/video/456170189" frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen 
            title="video1"
            className="py-4"
        />

        -Tóth Barnabás : Akik Maradtak (mellékszerep) 2018
        <br/>
        <br/>
        -Szabó Szonja : Vércsék (főszerep) 2019
        {/* https://vimeo.com/398000995?ref=em-share */}
        <iframe
            src="https://player.vimeo.com/video/398000995" frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen 
            title="video1"
            className="py-4"
        />

        -Csukás Márton : Mire Várunk? (főszerep) 2020
        {/* https://vimeo.com/464769630 */}
        <iframe
            src="https://player.vimeo.com/video/464769630" frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen 
            title="video1"
            className="py-4"
        />
        {/* (Jelszó: secretpassword11) */}
        <br/>
        Színházi szerepeim:
        <br/>
        <br/>
        -Serei Zsolt gyermek operája - MÜPA Fesztivál Színház - “Számláló”<br/>
        Premier : 2017 
        <br/>
        <br/>
        -Rómeó és Júlia - Pesti Magyar Színház - Júlia
        {/* https://youtu.be/SGCUxyYyr6g */}
        <iframe
            src="https://www.youtube.com/embed/SGCUxyYyr6g" frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen 
            title="video1"
            className="py-4"
        />

        Rendező : Eperjes Károly<br/>
        Premier : 2020 szeptember 28
        <br/>
        <br/>
        -Elfogyni az Ölelésben - Madách Színház - Csinszka<br/>
        Rendező : Horgas Ádám<br/>
        Várható premier : Július - augusztus
        <br/>
        <br/>
        Hobbijaim: 
        <br/>
        <br/>
        -angol nyelvű irodalom (középfokú nyelvvizsga)<br/>
        -modellkedés :<br/>
        -2018 - Tokio - Két hónap <br/>
        -2019 - Tokio - két hónap<br/>
        Hazai lapok megjelenés : Instyle, MarieClaire, Elle
        <br/>
        <br/>
        Éneklés: 
        <br/>
        <br/>
        -Bakáts Téri Iskola kórusa<br/>
        -Kodály Zoltán Iskola kórusa<br/>
        -Németországban - Kölni Dóm kórus - 2017-19
        <br/>
        <br/>
        -Jazz/Pop dalok éneklése<br/>
        -zongora<br/>
        -gitár
        
        <a href="https://www.instagram.com/hanna_kelemen_/" target="_blank" rel="noopener noreferrer" className="flex justify-center pt-10 pb-5"><Image width={30} height={30} src="/instagram.png" alt=""/></a>
    </p>
  )
}