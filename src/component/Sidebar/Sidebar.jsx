import { useState } from "react"
import "./Sidebar.css"
import { MdChevronLeft, MdChevronRight, MdCalendarMonth, MdOutlineHome,  MdPeople, MdForum} from "react-icons/md"
import { logoNext } from "../../assets"
const navLinks = [{
    url: '/dashboard',
    text: 'Accueil',
    icon: <MdOutlineHome />
  },
  {
    url: '/calendrier',
    text: 'Calendrier',
    icon: <MdCalendarMonth />
  },
  {
    url: '/clubs',
    text: 'Clubs',
    icon: <MdPeople />
  },
  {
    url: '/forum',
    text: 'Forum',
    icon: <MdForum />
  }
]
export default function Sidebar() {
  const [expand, setExpand] = useState(true)
  const handleExpand = () => {
    setExpand((prev) => (!prev))
  }
  return (
    <div className={`bg-white text-slate-900 flex flex-col h-full pt-5 transition-all ${expand? "w-52":"w-14"} relative rounded-25 shadow-md`}>
        <div className="sticky top-4">
            <div className='flex flex-row items-end left-5 ml-5'>
                <img src={logoNext} alt="" className='w-4 h-auto transition-all'/><span className={`text-[18px] ${expand? "absolute w-52 left-12 top-[2px]":"hidden"} transition-all`}> {`${expand ? "NextGen In": ""}`}</span>
            </div>
            <div className="mt-8">
                <ul>
                {navLinks.map((navLink, index) => (
                    <li key={index} className={`text-slate-500 py-2 pl-3  ml-1 mb-1 hover:text-green-900 navItem relative`}><a href={navLink.url} className={`flex flex-row space-x-2 items-center`}><span className="mr-3 ml-1 text-[22px]">{navLink.icon}</span> <p className={`text-[14px] overflow-hidden transition-opacity ${expand? "absolute left-12 opacity-100":"hidden opacity-0"}`}>{navLink.text} 
                   
                    </p></a> 
                    </li>
                
                ))}
                </ul>
            </div>
            <button className="text-[22px] font-extrabold absolute -right-6 top-[250px] text-slate-500 hover:text-slate-900" onClick={handleExpand}>{expand? <MdChevronLeft />:<MdChevronRight />}</button>

            
        </div>
    </div>
  )
}
