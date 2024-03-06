import React from 'react'
import { Button } from 'antd';
import { logoNext } from '../../assets';
export default function Navbar() {
    const navLinks = [{
        url: '/',
        text: 'Accueil'
      },
      {
        url: '/About',
        text: 'A propos'
      },
      {
        url: '/Contact',
        text: 'Nous contacter'
      }
    ]
  return (
    <nav className=" mt-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-1 items-center justify-start">
          <a href="#" className="text-violet-950 font-semibold text-xl pl-24 flex flex-row items-center"><img src={logoNext} alt="" className='w-5 h-auto'/><span className='ml-2'>NextGen In</span></a>
        </div>
        <div className="flex flex-1 justify-center">
            {navLinks.map((nav, index) => (
                <a href={nav.url} className="text-violet-950 hover:text-violet-700 font-semibold px-3 py-2 rounded-md text-xs ">{nav.text}</a>   
            ))}
            <a href="/signing"><Button>S'inscrire</Button></a>
        </div>
      </div>
    </nav>
  )
}
