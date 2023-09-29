import React, { useState } from "react";
import { quizData } from "../constant";
import "./Quiz.css"; // Import the CSS file here


function Quiz() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [totalPoints, setTotalPoints] = useState(0);

  const handleOptionSelect = (questionIndex, points) => {
    const updatedAnswers = { ...selectedAnswers };
    updatedAnswers[questionIndex] = points;
    setSelectedAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    // Calculate total points based on selected answers
    const pointsArray = Object.values(selectedAnswers);
    const total = pointsArray.reduce((acc, points) => acc + points, 0);
    setTotalPoints(total);
  };

  return (

    <section>
      <h2 style= {{textAlign:"center"}}> Assessment form </h2>
    {/* ----- Form -----  */}
    <main className="quiz-container">
      {quizData.map((question, index) => (
        <div key={index} className="question-container">
          <p>{question.question}</p>
          <div className="options-container">
            {question.options.map((option, optionIndex) => (
              <label key={optionIndex}>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option.points}
                  onChange={() => handleOptionSelect(index, option.points)}
                />
                {option.optionText}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
      <p>Total Points: {totalPoints}</p>
    </main>

    </section>
  );
}

export default Quiz;
