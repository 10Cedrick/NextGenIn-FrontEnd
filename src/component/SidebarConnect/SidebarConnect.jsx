import React from 'react'
import { userInfo } from '../../constant/userInfo'
export default function SidebarConnect() {
  return (
    <div className='relative h-[50px] pt-3'>
        <div className='absolute right-28'>
            <div className='flex flex-row items-center gap-4'>
                <div className='w-8 h-auto' >
                    <img src={userInfo.avatar} alt="" />
                </div>
                <div>
                    <p>{userInfo.name}</p>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
