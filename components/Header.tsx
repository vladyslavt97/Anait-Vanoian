import Navigation from "./Navigation"

type Props = {}

export default function Header({}: Props) {
  return (
    <div className="w-screen h-14 text-center absolute">
      <Navigation/>
    </div>
  )
}