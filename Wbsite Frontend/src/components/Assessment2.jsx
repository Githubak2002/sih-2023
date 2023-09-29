// import { motion } from 'framer-motion'
import React, { useState } from "react";
import { quizData2 } from '../constant'
import "./Quiz2.css"; // Import your CSS file for styling
import Result from './Result'

function Assessement2() {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [Score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  const [Res, setRes] = useState(false);
  // const [next, setnext] = useState(null);


  // --------- option hiligh the selected btn ---------
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (index) => {
    setSelectedOption(index);
    console.log(index)
    console.log("current score "+Score);
    console.log("total score "+totalScore);
      
    const score = index + 1;
    setScore(score);
    // setTotalScore(totalScore + score);

    // setSelectedOption(index);
    // setnext();
  };

  // ====== option ======


  // const handleOptionSelect = (next) => {
  //   // Calculate the score based on the selected option
  //   const score = next + 1;
  //   setScore(Score + score);
  //   setnext(next);
  // };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData2.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      // const t_score = Score;
      setTotalScore(totalScore + Score);
      console.log("current score "+Score);
      console.log("total score "+totalScore);
      setSelectedOption(null); 
      setScore(0);
      // setnext(null);

      // Reset selected option for the next question
    }
  };

  // ---- previous quest HAAT isko - cal galat ho sakti hai ----
  // const handlePreviousQuestion = () => {
  //   if (currentQuestionIndex > 0) {
  //     setCurrentQuestionIndex(currentQuestionIndex - 1);
  //     setnext(null); // Reset selected option for the previous question
  //   }
  // };

  const handleSubmit = () => {
    const maxScore = 25;
    setTotalScore(totalScore + Score);
    // alert(`You scored ${totalScore} out of ${maxScore}`);
    console.log("final submit "+totalScore);
    setRes(true);
  };

  // ----------- tailwind css constant -----------
  const optcss = ['bg-[#ffffffdc] border-2 border-black my-2 p-2 hover:transition-all hover:scale-105 hover:cursor-pointer duration-[0.2s] origin-left sm:w-[20%] w-[56%]']
  const selected = ['bg-[#17da17bb] font-[600] border-2 border-black transition-all my-2 p-2 origin-left sm:w-[20%] w-[56%]']

  const currentQuestion = quizData2[currentQuestionIndex];

return (
<>
{/* <TotalS.Provider value={totalScore}> */}
<section>
{
    Res === true ? 
      <Result ts={totalScore} ket={1} /> :

    <main className="quiz-container">
    <div className="sm:w-[60%] w-[100%] sm:p-0 p-4 ">

      <h1 className='text-[#2c2c83]'>Question {currentQuestionIndex + 1}/5</h1>
      <h2 className='sm:text-3xl text-xl font-semibold text-[#5656ff]'>{currentQuestion.question}</h2>


      {/* <p>Choose the option that is closest to you</p> */}
      <div className="options">
        {currentQuestion.options.map((option, index) => (
          <button 
            key={index}
            onClick={() => handleOptionSelect(index)}
            className={selectedOption === index ? `${selected}` : `${optcss}`}
            // className={`next` === index ? "selected" : ""}
            // disabled={next === null}
          >
            {option}
          </button>
        ))}
      </div>

      {/* ---- next, previous and submit Buttons */}
      <div className='mt-3 flex font-bold text-2xl'>
        {/* {currentQuestionIndex > 0 && 
          <button className="previous" onClick={handlePreviousQuestion}>
            ← Previous
          </button>
        } */}


        {currentQuestionIndex < quizData2.length - 1 ? 
          <button className="border-black border-2 p-2 w-fit bg-[#5b5bffec] hover: shadow-2xl" onClick={handleNextQuestion} 
          // disabled={next === null}
          >
            Next → 
          </button> : 

          <button 
          className="border-black border-2 p-2 w-fit bg-[#5858ffb0] hover:bg-[#0000ffc6] hover:text-white" 
          onClick={handleSubmit}  
          >
            Submit
          </button>
          }
      </div>
      
      

      {/* <h2>Total score {totalScore}</h2> */}
      </div>
    </main>


}
</section>
{/* </TotalS.Provider> */}
</>
  );
}

export default Assessement2;
