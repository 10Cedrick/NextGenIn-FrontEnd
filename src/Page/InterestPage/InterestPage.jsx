import { CentreIntererContainer } from "../../component"
import {Button} from 'antd'
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import './InterestPage.css'
import { listeCentreInteret } from "../../constant/InterestInfo";reInteret
export default function InterestPage() {

  return (
    <div className="pt-4 px-24 relative">
      <div>
        <div className="rounded-full hover:bg-slate-200 cursor-pointer flex items-center pl-3  w-12 h-12">
          <a href='/signing'><MdArrowBack className="text-2xl "/></a>
        </div>
        <h1 className="text-2xl mt-8 ml-4 title"><span>Choisir au moins un centre d'intérêt ✨</span></h1>
      </div>
      <div className="flex flex-wrap mt-8 ">
        {listeCentreInteret.map((item, index) => (
            <div key={index} className="w-1/4 p-4">
              <CentreIntererContainer item={item}/>
            </div>
        ))}
      </div>
      <div className=" justify-center flex mt-8">
        <Button size='large' className='' style={{padding: '5px 150px'}}>
            <div className="flex flex-row items-center"><span className="mr-4">Poursuivre</span> <MdArrowForward /></div>  
        </Button>
      </div>
        
    </div>
  )
}
