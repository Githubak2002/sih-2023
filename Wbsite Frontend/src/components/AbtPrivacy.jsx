import React from 'react'
import { PriArr } from '../constants/const'
const AbtPrivacy = () => {
  return (
    <main className='my-8 sm:flex  '>
        {
            PriArr.map((e,i)=>(
                <div key={i} className='sm:w-[50%] px-4 '>
                    <h2 className=' text-violet-600 my-2 text-2xl font-bold'>{e.heading}</h2>
                    <p>{e.content}</p>
                </div>
            ))

        }
        <div>
            <h2></h2>
        </div>
    </main>
  )
}

export default AbtPrivacy