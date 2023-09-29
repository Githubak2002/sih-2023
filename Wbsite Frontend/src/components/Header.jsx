import React from 'react'

const Header = () => {
  return (
    <header className='bg-[#007bff8d2] flex flex-wrap sm:text-white items-center'>
    <h2 className='sm:pl-5 flex justify-center flex-col sm:h-[100px] font-bold bg-violet-500 text-white text-lg p-3 sm:w-[60%]'>You don't have to control your thoughts. You just have to stop letting them control you. <br /> <b className=' text-green-500'>Do not Live life -- ENJOY LIFE </b></h2>
    <div className='flex sm:h-[100px] items-center justify-between sm:bg-violet-500 bg-none sm:w-[40%]  gap-x-3 p-2 sm:pr-5'>
        <h4 className='border-dashed sm:border-white border-black border-r-[1.2px]'>150 Million Readers Helped Each Year</h4>
        <h4 className=' border-dashed sm:border-white border-black border-r-[1.2px]'>100 + Expert Health Writers</h4>
        <h4>150 + Mental Health Topic </h4>
    </div>
  </header> 
  )
}

export default Header