import Image from "next/image"

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className="relative bottom-0 bg-orange-700/30 m-3 rounded-lg flex flex-col gap-10 p-3">
      <div>
        <h3 className="italic text-gray-500">Get in touch:</h3>
        <h3 className="text-gray-500">hanna@gmail.com</h3>
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