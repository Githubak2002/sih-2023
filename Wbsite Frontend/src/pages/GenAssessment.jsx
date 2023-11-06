import React from 'react'
import {quizData} from './question.js'

const optcss = 'bg-[#ffffffdc] border-2 border-black my-2 p-2 hover:transition-all hover:scale-105 hover:cursor-pointer duration-[0.2s] origin-left sm:w-[20%] w-[56%]'
const selected = 'bg-[#17da17bb] font-[600] border-2 border-black transition-all my-2 p-2 origin-left sm:w-[20%] w-[56%]'

const GenAssessment = () => {

  return (
    <section>

    <form className='GenAssessment-body-css'>

        <lable>
            Enter your name
        </lable>
        <input className=' rounded-lg m-3 p-2 border-black border-2' type="text" placeholder='Name'/>


    <main>
        {
            quizData.map((q,i) => {
                return(
            <div key={i} className="sm:w-[60%] w-[100%] sm:p-0 p-4 ">

            <h1 className='text-[#2c2c83]'>Quest {i+1}/14</h1>
            
            <h2 className='text-xl font-semibold text-[#5656ff]'> {q.question}</h2>

            <div className="options">
        
            <button className={`${optcss}`}> {q.options[0]} </button><button className={`${optcss}`}> {q.options[1]} </button><button className={`${optcss}`}> {q.options[2]} </button><button className={`${optcss}`}> {q.options[3]} </button><button className={`${optcss}`}> {q.options[4]} </button>

            </div>

            </div>
                )
            })
        }
    {/* <div className="sm:w-[60%] w-[100%] sm:p-0 p-4 ">

            <h1 className='text-[#2c2c83]'>Question index</h1>
            
            <h2 className='sm:text-3xl text-xl font-semibold text-[#5656ff]'>I could not stop feeling sad</h2>


        <div className="options">
        
          <button className={`${optcss}`}>
            option 1
          </button>
          <button className={`${optcss}`}>
            option 2
          </button>
          <button className={`${optcss}`}>
            option 3
          </button>
          <button className={`${optcss}`}>
            option 4
          </button>
          <button className={`${optcss}`}>
            option 5
          </button>
        </div>
    </div> */}
    </main>

    </form>
    </section>
  )
}

export default GenAssessment