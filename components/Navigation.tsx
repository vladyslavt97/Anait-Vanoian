
type Props = {}

export default function Navigation({}: Props) {
    const styling = "w-7 bg-pink-500 h-0.5"
  return (
    <div className="flex flex-col gap-1.5 absolute right-8 top-5">
        <div className={styling}/>
        <div className={styling}/>
        <div className={styling}/>
    </div>
    
  )
}