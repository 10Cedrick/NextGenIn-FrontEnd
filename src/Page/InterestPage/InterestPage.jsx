import { CentreIntererContainer } from "../../component"
import {Button} from 'antd'
export default function InterestPage() {
  const listeCentreInteret = [{
    interesName: 'Sport',
  },
  {
    interesName: 'Chant'
  },
  {
    interesName: 'Mathématique'
  },
  {
    interesName: 'Algorithme'
  },
  {
    interesName: 'Art Oratoire'
  },
]
  return (
    <div className="pt-16 px-24">
      <div>
        <h1 className="text-2xl">Choisir au moins un centre d'intérêt</h1>

      </div>
      <div className="flex flex-wrap mt-8">
        {listeCentreInteret.map((item, index) => (
            <div key={index} className="w-1/3 p-4">
              <CentreIntererContainer item={item}/>
            </div>
        ))}

        
      </div>
      <div className="mt-4 justify-center flex">
        <Button size='large' className='px-8'>
            Poursuivre
        </Button>
      </div>
        
    </div>
  )
}
