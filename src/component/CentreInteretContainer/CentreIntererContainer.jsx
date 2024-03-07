import {useState} from 'react'
import "./CentreIntererContainer.css"
import { MdDirectionsRun, MdMic, MdFunctions, MdRecordVoiceOver, MdLanguage  } from 'react-icons/md';

export default function CentreIntererContainer({item}) {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked((prev) => (!prev))
    }
  return (
    <div className={`relative containerInteret rounded-sm pt-10 pl-10 pb-24 cursor-pointer border overflow-hidden hover:shadow-sm  ${clicked ? " border-blue-400 text-blue-300": " hover:border-blue-400 hover:text-blue-300 border-slate-50"}`} onClick={handleClick}>
        <div className="absolute bottom-0 left-0 bg-gradient-to-tr from-blue-50 via-transparent to-transparent h-[50px] w-[50px]"></div>
        <div className=''>
          
          <h2 className='text-lg'>{item.interestName}</h2>
        </div>
        
    </div>
  )
}
