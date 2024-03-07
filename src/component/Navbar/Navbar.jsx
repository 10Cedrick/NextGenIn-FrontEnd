import React, { useState } from 'react'
import { Button } from 'antd';
import { logoNext } from '../../assets';
import './Navbar.css';

export default function Navbar() {
    const [active, setActive]= useState('Accueil');

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
          <a href="#" className="text-black font-semibold text-xl pl-24 flex flex-row items-center"><img src={logoNext} alt="" className='w-5 h-auto'/><span className='ml-5 font-bold'>NextGen In</span></a>
        </div>
        <div className="flex flex-1 justify-center">
            {navLinks.map((nav, index) => (
                <a key={index} href={nav.url} onClick={()=>setActive(nav.text)}  className={`text-black font-semibold px-5 py-2 rounded-md text-xs link-navbar relative ${active===nav.text && 'active'}`}>{nav.text}</a>   
            ))}
            <a href="#"><Button id='navBar__login--btn'>Se connecter</Button></a>
        </div>
      </div>
    </nav>
  )
}
