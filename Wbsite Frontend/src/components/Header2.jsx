import React from 'react'
import {enjoy} from '../assets/img'
import { hero_img } from '../assets/img'
const Header2 = () => {
  return (
    <header className='relative mx-auto max-w-[1280px]'>
        <div className='w-full overflow-hidden'>

            <img className="w-screen " src={hero_img} alt="img" />
            {/* <img className="w-screen min-w-[150%]" src="https://www.beyondblue.org.au/app_themes/reskin/images/mhc-bg2s.svg" alt="" /> */}
        </div>
        <div className='absolute top-0 right-0 px-3 flexCenter'>
            <img className='md:h-60 h-28' src={enjoy} alt="" />
        </div>

        {/* <h2 className='text-xl font-semibold text-center mt-6 px-3'>The purpose of our lives is to be happy. Ek Smile De jara Muskura... 😊</h2> */}
    </header>
  )
}

export default Header2