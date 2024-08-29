import React ,{useState}from 'react'
import { Link } from 'react-router-dom'
// import logo from '../assets/logo.png'
// import { flushSync } from 'react-dom';

const Nav = () => {

  // const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='border-b-2 border-black bg-gradient-to-r from-[#373af189] to-[#fff]'>

    <div className='flex items-center justify-between px-6'>
      
      <div className='hidden lg:flex'>
        <h1 className='font-black text-lg'>WellMind Junction</h1>
      </div>

      <div className='hidden lg:flex p-4 text-sm lg:font-bold flex-col lg:flex-row items-center justify-evenly w-2/4'>
        <Link to='/' className='navlinkcss flexCenter'>Home</Link>
        <Link to='mentalhealth' className='navlinkcss'>Know Your Mental Health</Link>
        {/* <Link to='dashboard' className='navlinkcss'>Dashboard</Link> */}
        {/* <Link to='/' className='navlinkcss'>Mental Health Conditions</Link> */}
        <Link to='/' className='navlinkcss'>Education</Link>
        <Link to='/' className='navlinkcss'>Doctor Hub</Link>
        <Link to='/dashboard' className='navlinkcss'>Dashboard</Link>
        {/* <Link to='movies/top_rated' className='navlinkcss'>Living Well</Link> */}
      </div>

      

    </div>
      
      
      
  {/* nav bar for small devices  */}

    <div className='flex items-center justify-between relative sm:h-auto h-[50px]'>

    <div className='ml-5 flex lg:hidden '>
        WellMind Junction
    </div>

    <div className=' '>

    <i className={` mr-5 text-xl lg:hidden  hover:cursor-pointer  ${toggle ? "hidden" : "ri-menu-2-line"}`}
    onClick={() => setToggle(prev => !prev)}></i>

    <i className={`mr-5 text-xl  lg:hidden hover:cursor-pointer ${toggle ? "ri-close-fill" : "hidden"} `}
    onClick={() => setToggle(prev => !prev)}></i>

      {/* <div className=''> */}
      <div className={` ${toggle ? "flex" : "hidden"} flex lg:hidden  flex-col items-center justify-end bg-[#25242bdb] text-white rounded-lg p-4 z-50 absolute right-12 top-2  min-w-[168px] font-bold`}>

        <Link to='/' className='navlinkcss pt-2 px-2' onClick={() => setToggle(prev => !prev)}>Home</Link>
        <Link to='/mentalhealth' className='navlinkcss pt-2 px-2' onClick={() => setToggle(prev => !prev)}>Know Your Mental Health</Link>
        <Link to='/' className='pt-2 navlinkcss' onClick={() => setToggle(prev => !prev)}>Doctor</Link>
        <Link to='/' className='pt-2 navlinkcss' onClick={() => setToggle(prev => !prev)}>Education</Link>
        <Link to='dashboard' className='pt-2 navlinkcss' onClick={() => setToggle(prev => !prev)}>Dashboard</Link>
  

      </div>
      {/* </div> */}
      </div>


    </div>

    </nav>

  )
}

export default Nav