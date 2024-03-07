import React from "react";
import { CentreIntererContainer } from "../../component";
import { Button } from "antd";
import { MdArrowForward } from "react-icons/md";
import './InterestPage.css';
import { basket, mic, art, math, langage } from "../../assets";

const listeCentreInteret = [
  {
    icon: <img src={basket} className="w-24 h-auto" />,
    interestName: 'Sport',
  },
  {
    icon: <img src={mic} className="w-24 h-auto" />,
    interestName: 'Chant'
  },
  {
    icon: <img src={math} className="w-24 h-auto" />,
    interestName: 'Mathématique'
  },
  {
    icon: <img src={art} className="w-24 h-auto" />,
    interestName: 'Art'
  },
  {
    icon: <img src={langage} className="w-24 h-auto" />,
    interestName: 'Langue et parler'
  },
];

export default function InterestPage() {
  return (
    <div className="pt-4 px-24 relative">
      <div className="mt-6">
        <h1 className="text-2xl ml-4 title"><span>Choisir au moins un centre d'intérêt ✨</span></h1>
      </div>
      <div className="flex flex-wrap mt-8 relative">
        {listeCentreInteret.map((item, index) => (
          <div key={index} className="w-1/4 p-4">
            <CentreIntererContainer item={item} />
          </div>
        ))}
      </div>
      <div className="absolute flex right-0 mr-36">
        <a href="/dashboard"><Button size='large' className='' style={{ padding: '5px 150px' }}>
          <div className="flex flex-row items-center"><span className="mr-4">Poursuivre</span> <MdArrowForward /></div>
        </Button></a>
      </div>
    </div>
  );
}
