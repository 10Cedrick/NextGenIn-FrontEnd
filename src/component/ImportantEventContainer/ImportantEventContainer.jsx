import {CalendarOutlined} from '@ant-design/icons'
import { reception } from '../../assets'
export default function ImportantEventContainer() {
  return (
    <div className='flex flex-row items-center space-x-8 mt-24 px-8'>
      <div className="flex-1">
        <h1 className='text-4xl'>Reception des NOVICES </h1>
        <div className='flex flex-row items-center text-slate-500 mt-2'><CalendarOutlined /> <span className='ml-2 text-[14px]'>08 Mars 2024 | KSLM Andrainjato</span></div>
        <p className='text-[14px] mt-4 pl-2'>Un evenement à ne pas manquer pour réussir votre intégration au sein de l'Ecole Nationale d'Informatique. Alors, vous venez ?</p>
      </div>
      <div className="flex-1 h-[350px] w-full bg-slate-100 overflow-hidden rounded-md relative">
            <img src={reception} alt="" className=' object-cover'/> 
      </div>
    </div>
  )
}
