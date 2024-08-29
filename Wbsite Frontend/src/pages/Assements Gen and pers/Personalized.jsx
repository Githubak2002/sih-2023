import React from 'react'
import { Link } from 'react-router-dom'

const LinkCss = "border border-black p-2 rounded-xl";

const Personalized = () => {
  return (
    <section className='flexCenter flex-wrap gap-5 h-[60vh] sm:flex-row flex-col'>
    <Link to='#' className={LinkCss}>Anxiety</Link>
    <Link to='/quiz' className={LinkCss}>Depression</Link>
    <Link to='#' className={LinkCss}>Sleep Disorder</Link>
  </section>
  )
}

export default Personalized