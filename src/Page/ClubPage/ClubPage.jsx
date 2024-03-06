import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { clubs } from '../../contant/clubInfo'
export default function ClubPage() {
    const {id} = useParams()
    const [currentClub, setCurrentClub] = useState(null)
    useEffect(() => {
        setCurrentClub(clubs.find(club => club.id=id))
        if(!currentClub){
            console.log("Aucun club trouvé");
        }
    })
    
    return (
    <div>
        {
            currentClub && 
            <main className='relative'>
                <div className='h-[30vh] bg-slate-50'>
                    
                </div>
                <div className='px-28 mt-16 items-center flex flex-col absolute top-10'>
                    <div className='h-52 w-52 bg-slate-100 rounded-full'>
                    </div>
                    <div className='mt-8'>
                        <h1 className='text-4xl text-center'>{currentClub.nomClub}</h1>
                        <p className='text-center mt-4 px-96'>{currentClub.description}</p>
                    </div>
                </div>
                <div>
                    
                </div>
            </main>
        }
    </div>
  )
}
