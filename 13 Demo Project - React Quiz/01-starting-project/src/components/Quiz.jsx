import { useState } from "react";

// always first question is correct and therefore we need to shuffle them to display
import QUESTIONS from "../questions.js";

// Show currently active question to the user
// When user answers a question then switch to the next question
// 1. switching between questions
// 2. registering user answers

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  // because index starts from 0
  const activeQuestionIndex = userAnswers.length;

  function handleSelectedAnswer(selectedAnswer) {
    setUserAnswers((prevState) => {
      return [...prevState, selectedAnswer];
    });
  }

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectedAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
