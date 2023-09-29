import React from 'react'
import Nav from './Nav'
import Header2 from './Header2'
import Header from './Header'
import Promise from './Promise'
import Footer from './Footer'
import AbtPrivacy from './AbtPrivacy'
import GenSol from './GenSol'
import { Link } from 'react-router-dom'
import { hltArr } from '../constants/const'
const Home = () => {
  return (
    <section className='max-w-[1280px] mx-auto '>

      <Nav />   
      <Header />
      <Header2 />
     

      <main className='bg-[#7231fd0d] my-10 px-4 py-6 flex sm:flex-row flex-col border-y-2 border-black'>

        <div className='sm:mb-0 mb-10 sm:w-[34%]  font-semibold px-4'>

            <h4 className='mb-10 sm:text-2xl text-xl'>
            Take a Quiz to know about your Mental condition and get help!
            </h4>

            <Link to="quiz" className=' border-[#000] border-[1.2px] p-2 hover:bg-black hover:text-white'>Take Assessment → </Link>
        </div>

        <div className='sm:w-[66%] px-4'>
            <h2 className='sm:text-lg font-bold'>
                About MENTAL HEALTH
            </h2>
            <div className='sm:flex gap-2'>
            {
            hltArr.map((ele,i) => (
            <div key={i} className=' flex justify-start sm:flex-col items-center mt-3  '>
            <img className='sm:h-28 h-20 sm:mr-5 mr-2 sm:w-auto w-fit' src={ele.imgurl} alt="an_img" />
            <h3 className='sm:text-center sm:text-lg'>{ele.content}
            </h3>
            </div>
            ))
        
            }
            </div>
        </div>

      </main>

      <Promise />
      <AbtPrivacy />
      {/* <GenSol />   */}

      <Footer />
    
    </section>
  )
}

export default Home

// things that may help you overcome DEPERATION game music share felling to your friend reduce screen time 

// content  - privacy