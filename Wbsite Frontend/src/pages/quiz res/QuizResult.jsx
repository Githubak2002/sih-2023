import React from 'react'
// import { TotalS } from './Assessment2'
import { Link,useLocation } from 'react-router-dom';
const QuizResult = (props) => {

    const location = useLocation();
    
    // const t_score = location.state.prop1;
    const mentalConftion = props.mentalCon;
    console.log(location);
    console.log(props);
    // const customState = location.state.totalScore;

  return (
    <section className='sm:h-screen sm:w-screeen h-screen mx-auto max-w-[1200px] flexCenter flex-col result_bg_img relative '>

        <img className=' -z-50 flex sm:hidden h-[200px] opacity-80 absolute bottom-2 right-2' src="https://www.beyondblue.org.au/images/default-source/3.the-facts/mental-health-check-in-headerc0d0e67c8dcc4bfc81d772df319b1ab5.svg?sfvrsn=3f1cad35_2" alt="" />

        <main className='' 
        style={{textShadow: "0px 5px 14px #ffffff,0px 7px 12px white"}}
        >

            <div className='z-80 text-center p-4 pt-6 sm:text-xl font-normal max-w-[510px]'>
            {/* <h1 className='font-bold mb-3 text-4xl'>Total score {props.ts} </h1> */}

            <h3 className='my-6'>Based on your assessment Score...<b>{mentalConftion} </b></h3>

            <h1 className='font-medium text-2xl'>😊 Thank you for taking the Assessement. </h1>
            </div>
            

            <Link className='flexCenter' to="/" > ← Go back to Home...</Link>
            <Link className='flexCenter' to="/quiz" > ← Retake the Assessment.</Link>

        </main>
               
    </section>  
  )}

export default QuizResult