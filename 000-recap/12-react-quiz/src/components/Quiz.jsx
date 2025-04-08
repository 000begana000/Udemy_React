// control this quiz and render other quiz related components
import { useState } from "react";

import QUESTIONS from "../questions.js";

export default function Quiz() {
  // managing state for current question, user answers, and questions
  const activeQuestionIndex = 0;
  const [userAnswers, setUserAnswers] = useState([]);

  function handleClickAnswer(selectedAnswer) {
    setUserAnswers(prevUserAnswers => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {QUESTIONS[activeQuestionIndex].answers.map(answer => (
            <li key={answer} className="answer">
              <button onClick={() => handleClickAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
