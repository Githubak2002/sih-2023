import React from 'react'
import Header2 from './Header2'
import Header from './Header'
import Promise from './Promise'
import Footer from './Footer'
import AbtPrivacy from './AbtPrivacy'
import GenSol from './GenSol'
import { Link } from 'react-router-dom'
import { hltArr } from '../constants/const'
import chatBot from '../../public/chatbotpng.png'
const Home = () => {
  return (
    <section className='relative max-w-[1280px] mx-auto '>

      <Header />
      <Header2 />

      {/* === chatobt img === */}
        <Link to="https://chatgpt.com/g/g-KHlGIY3kv-arogya" target='blank'>
        {/* <Link to="https://drive.google.com/drive/folders/136wvKezTFu3HTFQYsVhdgM6D8Em4cfGd?usp=drive_link" target='blank'> */}
        <img className=' bg-[#00000038] p-2 rounded-full fixed h-14 w-14 bottom-5 right-5 sm:bottom-10 sm:right-10' src={chatBot} alt="chatBot" />
        </Link>
     

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