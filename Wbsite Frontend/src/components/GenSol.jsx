import React from 'react'
import { genArr } from '../constants/const'

// css contant
const c1 = "flex-row-reverse";
// const c2 = "flex-row-reverse";
const GenSol = () => {
  return (
    <section className='text-center text-4xl'>
      {
        genArr.map((e,i) => (
          <div key={i} className={`${(i%2===0)} ? ${c1}: "flexCenter" `}  >
            <img className="h-[240px]" src={e.imgurl} alt="" />
            <h5>{e.content}</h5>
          </div>
        ))
      }
        <h2 className='my-4'>Genral Solutions</h2>GAMES, TRAVEL, MUSIC, SPEND TIME WITH FRIEND,much more... 
    </section>
  )
}

export default GenSol