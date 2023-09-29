import React from 'react'
import { promiseArr } from '../constants/const'

const Promise = () => {
  return (
    <section>
    
    <h1 className='ml-8 mt-6 text-2xl font-semibold'>OUR PROMISE</h1>

    <main className='flex flex-col sm:flex-row items-center sm:m-6 m-3 p-4 bg-[#a7e4f9] rounded-2xl text-bold text-green-800'>

      <div className='sm:w-[32%]'>
        <h2 className='text-2xl'>Our content helps you make the best choices for your mental well-being. </h2>
      
        <button className='p-2 my-6 bg-green-500 text-xl text-white font-black w-fit'>READ ABOUT OUR PROCESS → </button>

      </div>


      <div className='sm:flex gap-2 sm:w-[68%]'>
        {
            promiseArr.map((ele,i) => (
            <div key={i} className=' flex justify-start sm:flex-col items-center mt-3  '>
            <img className='sm:h-28 h-20 sm:mr-5 mr-2 sm:w-auto w-fit' src={ele.imgurl} alt="an_img" />
            <h3 className='sm:text-center sm:text-lg'>{ele.content}
            </h3>
            </div>
            ))
        
        }
      </div>

    </main>


    </section>

)}

export default Promise