import React from 'react'
import { MdPlace } from 'react-icons/md';
import './ImportantDateContainer.css'
export default function ImportantDateContainer({date}) {
  return (
    <div className={`${date.id == 1 ? 'bg-green-100' : "containerDate"} py-4 px-8 rounded-sm w-1/4` }>
        <div className='flex flex-col py-16'>
            <h1 className='text-4xl'>{date.day}</h1>
            <p className='text-lg'>{date.month}</p>
        </div>
        <div className='mt-16'>
            <p className='dateTitle'>{date.description}</p>
            <div className='flex flex-row items-center mt-4 text-[14px] text-gray-400'><MdPlace /><span>{date.place}</span></div>
        </div>
    </div>
  )
}
