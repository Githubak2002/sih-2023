import React, { useState,useRef } from 'react';
import { quizData,quizDataTemp } from '../question';
import { Link } from 'react-router-dom';
// import './quiz.css'; // Import your CSS file

const Quiz = () => {
  //  ==== useRef
  const formRef = useRef(null);
  // Use state to handle Data that needs to be updated on DB
  const [answers, setAnswers] = useState([]);
  const [totalScore, setTotalScore] = useState(0);
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [mentalCon,setmentalCon] = useState('');

  // Radio btn onchange function to get total marks
  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = value;
    setAnswers(newAnswers);

    // Calculate the total score
    let score = 0;
    for (let i = 0; i < newAnswers.length; i++) {
      score += (newAnswers[i] + 1); // Adding 1 to convert index to points (0->1, 1->2, ..., 4->5)
    }
    setTotalScore(score);
  };  


  // ===== functions =====
  const handleName = (e) => {
    setName(e.target.value);
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  // const handleMentalCon = (e) => {
  //   setName(e.target.value);
  // }

  //  ====== DB ======= 

  const handleSubmit = async (e) => {
    console.log('atleast printed');
    e.preventDefault();    

    const full_name = name;
    const email_id = email;
    const t_score = totalScore;

    // checking if all the fileds are filed or not
    if(name && email && totalScore>=14){
      // if(name && email && totalScore>=14){
      const res = await fetch("https://mental-health-add78-default-rtdb.firebaseio.com/users.json",{
        method: "POST",
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify({
          full_name,email_id,t_score
        })
      });

      // to clear all the things after getting all the data from the form
      formRef.current.reset();
      if(t_score<=31){
        setmentalCon("You are absolutly fine! 😍");
        alert("You are absolutly fine! 😍");
      }
      else if(t_score<=38){
        setmentalCon("You have Mild Depression symptoms. 😊 Just Relex and take Rest.");
        alert("You have Mild Depression symptoms. 😊 Just Relex and take Rest.");
      }
      else if(t_score<=53){
        setmentalCon("You have Moderate symptoms. 🥺 Take a Break.");
        alert("You have Moderate symptoms. 🥺 Take a Break.");
      }
      else {
        setmentalCon("You are in a Serious contition! 🥺 Consult a Doctor.");
        alert("You are in a Serious contition! 🥺 Consult a Doctor.");
      }
    }
    else
      alert("⚠️ Please fill all the details");

  }
// tailwind css for button
const btnCss = ' hover:translate-y-[-4px] transition-all hover:scale-110 hover:text-white hover:bg-black mx-auto w-fit border-black border-2 p-2 my-6';

return (
  <section className="bg-[#b1a6ea4f] ">
    {/* <section className="bg-gradient-to-b from-[#a6ccea4f] to-[#8960ea3e]"> */}
      <h2 className='text-center px-4 pt-5'>LEVEL 2—Depression—Child Age 11–17</h2>

      <p className='text-center px-4 pt-5 max-w-[870px] mx-auto'>
      Instructions to the child: On the DSM-5-TR Level 1 cross-cutting questionnaire that you just completed, you indicated 
that during the past 2 weeks you have been bothered by “having little interest or pleasure in doing things” and/or 
“feeling down, depressed, or hopeless” at a mild or greater level of severity. The questions below ask about these 
feelings in more detail and especially how often you have been bothered by a list of symptoms during the past 7 days.  
      </p>

      <h1 className='text-3xl font-bold text-center pt-3'>Assessment</h1>
      
      
      <form ref={formRef} onSubmit={handleSubmit} className='md:max-w-[650px] mx-auto sm:px-6 px-3'>
      
        <h1 className='my-5 text-xl'> <span className='text-red-500 font-bold'>NOTE</span> → Please fill all the below details to get the result.</h1>

        <div>
        <label htmlFor="name">Name</label>
        <input className='p-1 bg-transparent border-black border my-2 ml-2' 
          type="text" 
          placeholder='Full name' 
          name="name"
          // value={formData.name}
          // value=""
          onChange={handleName}
          required
        />
        <br />
        
        <label  htmlFor="email">Email</label>
        <input className='p-1 bg-transparent border-black border my-2   ml-2' 
        // value={formData.email}
        name="email"
        type="email" 
        placeholder='xyz@gmail.com' 
        onChange={handleEmail}
        required
        />
      </div>
        {/* </div> */}
        
        {quizData.map((question, questionIndex) => (
          <div className='py-4 border-b-2 border-slate-300' key={questionIndex}>
            <h5 className='sm:text-xl my-2'>{questionIndex+1}. {question.question}</h5>

            <div className='flex flex-wrap'>
            {question.options.map((option, optionIndex) => (
              <label key={optionIndex} className="px-2">
                <input
                  type="radio"
                  name={`question-${questionIndex}`}
                  value={optionIndex}
                  onChange={() => handleOptionChange(questionIndex, optionIndex, optionIndex)}
                />
                {option}
              </label>
            ))}
            </div>

          </div>
        ))}

        {/* <div className='flex flex-wrap'> */}
        {/* <input type='checkbox'  /> */}
        <h6 className='mt-8 max-w-[380px] '>⚠️ Warning: Before submitting, please double-check that all the fields above are properly filled. 🚫📝</h6>

        <button type='submit' className={btnCss}>Submit
        </button>
        
        {/* ========== ⚠️ RESULT page pe mental condition ka props send kar  */}
        
        {/* <Link 
         to={{
          pathname: '/result',
          state: "hi",
          // mentalCon 
          // state: { prop1: mentalCon } 
        }}
        > Result
        </Link> */}

      </form>

      {/* <h1 className='text-center'>Total Score → {totalScore}</h1> */}
    </section>
  );
};

export default Quiz;
