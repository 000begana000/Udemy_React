import { useState } from "react";

// always first question is correct and therefore we need to shuffle them to display
import QUESTIONS from "../questions.js";

import quizCompleteImage from "../assets/quiz-complete.png";

// Show currently active question to the user
// When user answers a question then switch to the next question
// 1. switching between questions
// 2. registering user answers

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  // because index starts from 0
  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  function handleSelectedAnswer(selectedAnswer) {
    setUserAnswers((prevState) => {
      return [...prevState, selectedAnswer];
    });
  }

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImage} alt="a shiny trophy image" />
        <h2>Quiz is completed!</h2>
      </div>
    );
  }

  const suffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  suffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {suffledAnswers.map((answer) => (
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
