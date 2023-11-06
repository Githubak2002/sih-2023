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
      
      <div 
      className='hidden md:flex p-4 text-md lg:font-bold lg:text-xl flex-col md:flex-row items-center justify-evenly w-2/4'>
        <Link to='/' className='navlinkcss flexCenter'>Home</Link>
        <Link to='quiz' className='navlinkcss'>Quiz</Link>
        <Link to='dashboard' className='navlinkcss'>Dashboard</Link>
        <Link to='/' className='navlinkcss'>Conditions A-Z</Link>
        {/* <Link to='movies/top_rated' className='navlinkcss'>Living Well</Link> */}
      </div>

      <div className='hidden md:flex'>
        {/* <a href="https://githubak2002.github.io/akportfolio" target='blank'><img className='hover:border-purple-500 hover:border-b-2 h-12 p-2 mr-10' src={logo} alt="logo" /></a> */}
        <h1 className='font-black text-2xl'>Free Mind l0go</h1>
      </div>

    </div>
      
      
      
  {/* nav bar for small devices  */}

    <div className='flex items-center justify-between relative sm:h-auto h-[50px]'>

    <div className='ml-5 flex md:hidden '>
        {/* <a href="https://githubak2002.github.io/akportfolio" target='blank'> */}
            {/* <img className='hover:border-purple-500 hover:border-b-2 h-12 px-4 sm:ml-8 ml-1 pb-4 my-4 mt-2' src="" alt="logo" /> */}
        {/* </a> */}
        Free Mind
    </div>

    <div className=' '>

    <i className={` mr-5 text-xl md:hidden  hover:cursor-pointer  ${toggle ? "hidden" : "ri-menu-2-line"}`}
    onClick={() => setToggle(prev => !prev)}></i>

    <i className={`mr-5 text-xl  md:hidden hover:cursor-pointer ${toggle ? "ri-close-fill" : "hidden"} `}
    onClick={() => setToggle(prev => !prev)}></i>

      {/* <div className=''> */}
      <div className={` ${toggle ? "flex" : "hidden"} flex md:hidden  flex-col items-center justify-end bg-[#25242bdb] text-white rounded-lg p-4 z-50 absolute right-12 top-2  min-w-[168px] font-bold`}>

        <Link to='/' className='navlinkcss pt-2 px-2' onClick={() => setToggle(prev => !prev)}>Home</Link>
        <Link to='quiz' className='navlinkcss pt-2 px-2' onClick={() => setToggle(prev => !prev)}>Quiz</Link>
        <Link to='dashboard' className='pt-2 navlinkcss' onClick={() => setToggle(prev => !prev)}>Dashboard</Link>
        <Link to='/' className='navlinkcss pt-2 px-2' onClick={() => setToggle(prev => !prev)}>Conditions A-Z</Link>

      </div>
      {/* </div> */}
      </div>


    </div>

    </nav>

  )
}

export default Nav