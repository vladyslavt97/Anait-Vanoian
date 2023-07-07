import Link from "next/link";

type Props = {}

export default function HunBio({}: Props) {
    const divstyle = "p-2 rounded-2xl mt-5 ";
  return (
    <div className="sm:flex flex-col md:px-20 lg:px-44 text-blue-900">
        2019-2023 között szerepeim színházakban, filmekben

        <span className="flex justify-center font-bold text-black mt-10">Színház</span>

        <Link href="https://www.youtube.com/watch?v=SGCUxyYyr6g" className="underline"><b className="font-bold text-black">Júlia</b> - “Rómeó és Júlia”, Pesti Magyar Színház - Eperjes Károly rendezésében </Link><br/>

        <b className="font-bold text-black">Cécile de Volanges</b> - “Veszedelmes Viszonyok” , Operett színház - Kiss Csaba rendezésében <br/>

        <b className="font-bold text-black">Roxie Hart</b> - “ Chicago”, Soproni Petőfi Színház - Eperjes Károly rendezésében <br/>

        <b className="font-bold text-black">Királylány</b> - “Sztravinszky: A Katona Története” országos turné - Ascher Tamás rendezésében 

        <span className="flex justify-center font-bold text-black mt-10">Filmszerepek</span>

        <b className="font-bold text-black">Csinszka</b> - “Elfogyni az Ölelésben”, színház-film, Madách színházban - Horgas Ádám rendezésében <br/>

        <b className="font-bold text-black">Zoé</b> - “Karaván” ,kisfilm - Szabó Szonja rendezésében <br/>

        <b className="font-bold text-black">Vörös</b> - “Ki vagy te” - sorozat “ RTL+ <br/>

        <Link href="https://www.youtube.com/watch?v=j5MC0O7m4Zk" className="underline"><b className="font-bold text-black">Hanna</b> - “What are we waiting for?”kisfilm - Csukás Márton rendezésében</Link> <br/>

        <b className="font-bold text-black">Orsi</b> - “Orsi és Tensinham” ,kisfilm - Szilágyi Fanny rendezésében <br/>

        <b className="font-bold text-black">Franciska</b>- “Vércsék”,kisfilm - Szabó Szonja rendezésében <br/>

        <b className="font-bold text-black">A model</b> - klip - Groove Armada együttes - Edge of the horizon, Theano Kapareli rendezésében <br/>

        <br/><br/>

        Saját dalok, ének


    </div>
  )
}