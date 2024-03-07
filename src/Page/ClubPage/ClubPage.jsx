import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { clubs } from '../../constant/clubInfo'
import { MdArrowBack } from "react-icons/md";
import { Tag } from 'antd';
import { ListItemPic, EventListItem} from '../../component';
import { eventsList } from '../../constant/EventInfo';
export default function ClubPage() {
    const {id} = useParams()
    const [currentClub, setCurrentClub] = useState(null)
    useEffect(() => {
        setCurrentClub(clubs.find(club => club.id==id))
        console.log(currentClub)

        if(!currentClub){
            console.log("Aucun club trouvé");
        }
    })
    
    return (
    <div>
        {
            currentClub && 
            <main className=''>
                <div className='h-[30vh] bg-slate-50 relative overflow-hidden'>
                    <div className="absolute rounded-full hover:bg-slate-200 cursor-pointer flex items-center pl-3  w-12 h-12 left-5 top-5">
                        <MdArrowBack className="text-2xl"/>
                        
                    </div>
                    <img src={currentClub.avatar} alt="" className='w-full h-auto'/>
                </div>
                <div className='pl-16 items-start flex flex-row relative'>
                    <div className='mt-16 h-52 w-52 bg-slate-100 rounded-full absolute -top-48 overflow-hidden'>
                        <img src={currentClub.avatar} alt="" />
                    </div>
                    <div className='mt-16 px-12 w-[150vh]'>
                        <div className='mt-12'>
                            <h1 className='text-4xl'>{currentClub.nomClub}</h1>
                            <div className='px-5'>
                                <div>
                                    <p className='mt-6'>{currentClub.description}</p>
                                </div>
                                <div>
                                    <h2 className='mt-8 text-lg'>Liste des mentors :</h2>
                                    <div className='px-3 mt-6 flex flex-row'>
                                        {currentClub.mentors.map((item, index) => (
                                            <ListItemPic item={item} type={"small"} key={index}/>
                                        )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className='mt-11'>
                            <h1 className='text-xl section-title'>Les evènements prochains du club</h1>
                        </div>
                        <div>
                            {eventsList.map((item, index) => {
                                if(item.clubId === currentClub.id){
                                    return (<EventListItem key={"e" + index} item={item}>
                                        
                                    </EventListItem>)
                                }
                            })}
                        </div>
                    </div>

                    <div className='h-screen border-l border-slate-100 px-8 pt-16'>
                        <div>
                            <h3 className='text-lg'>Centre d'interet :</h3>
                            <div className='flex flex-row flex-wrap space-y-4 items-end'>
                                {currentClub.listeCentreInteret.map((item, index) => (
                                    <Tag key={index} className='mr-2 text-[15px}'>{item.interestName}</Tag>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                
            </main>
        }
    </div>
  )
}
