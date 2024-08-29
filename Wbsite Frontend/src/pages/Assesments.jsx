import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const LinkCss = "border border-black p-2 rounded-xl";
const Assesments = () => {
  return (
    <section className='flexCenter flex-wrap gap-5 h-[60vh] sm:flex-row flex-col'>
      <Link to='#' className={LinkCss}>General Assesment</Link>
      <Link to='/personalized' className={LinkCss}>Personalized Assesment</Link>
      
      <Outlet /> 
    </section>
  )
}

export default Assesments