import React from 'react'

export default function FaqItem({item}) {
    
    return (
        <div className='pt-8 mx-8 '>
            <div className='flex flex-row gap-2'>
                <div>
                    <h1>{item.question  + ' ?'}</h1>
                </div>
            </div>
            <div className='mt-4'>
                <p>{item.reponse}</p>
            </div>
        </div>
    )
}
