import {CalendarOutlined} from '@ant-design/icons'
export default function ImportantEventContainer() {
  return (
    <div className='flex flex-row items-center space-x-8'>
      <div className="flex-1">
        <h1 className='text-4xl'>Reception des NOVICES </h1>
        <div className='flex flex-row items-center text-slate-500 mt-2'><CalendarOutlined /> <span className='ml-2'>08 Mars 2024</span></div>
        <p className='text-[14px] mt-4'>Un evenement à ne pas manquer pour réussir votre intégration au sein de l'Ecole Nationale d'Informatique. Alors, vous venez ?</p>
      </div>
      <div className="flex-1 h-[400px] w-full bg-slate-100">
        {/* <img src="" alt="" /> */}
      </div>
    </div>
  )
}
