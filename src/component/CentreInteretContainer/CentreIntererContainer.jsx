import {useState} from 'react'
import { MdFlutterDash } from "react-icons/md";
export default function CentreIntererContainer({item}) {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked((prev) => (!prev))
    }
  return (
    <div className={`bg-slate-50 rounded-md pt-10 pl-10 pb-24 cursor-pointer ${clicked ? "border border-red-400 text-red-300": "hover:border hover:border-red-400 hover:text-red-300 "}`} onClick={handleClick}>
        <div className=''>
          <MdFlutterDash className='text-3xl'/>
          <h2 className='text-lg'>{item.interesName}</h2>
        </div>
    </div>
  )
}
