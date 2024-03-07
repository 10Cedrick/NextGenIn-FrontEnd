import { CentreIntererContainer } from "../../component"
import {Button} from 'antd'
import { MdArrowBack } from "react-icons/md";
import './InterestPage.css'
export default function InterestPage() {
  const listeCentreInteret = [{
    interestName: 'Sport',
  },
  {
    interestName: 'Chant'
  },
  {
    interestName: 'Mathématique'
  },
  {
    interestName: 'Algorithme'
  },
  {
    interestName: 'Art Oratoire'
  },
]
  return (
    <div className="pt-4 px-24 relative">
      <div>
        <div className="rounded-full hover:bg-slate-200 cursor-pointer flex items-center pl-3  w-12 h-12">
          <MdArrowBack className="text-2xl "/>
        </div>
        <h1 className="text-2xl mt-8 ml-4 title"><span>Choisir au moins un centre d'intérêt ✨</span></h1>
      </div>
      <div className="flex flex-wrap mt-8 px-16">
        {listeCentreInteret.map((item, index) => (
            <div key={index} className="w-1/4 p-4">
              <CentreIntererContainer item={item}/>
            </div>
        ))}
      </div>
      <div className=" justify-center flex mt-8">
        <Button size='large' className='px-8'>
            Poursuivre
        </Button>
      </div>
        
    </div>
  )
}
