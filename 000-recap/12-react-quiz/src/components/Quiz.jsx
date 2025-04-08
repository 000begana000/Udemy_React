// control this quiz and render other quiz related components
import { useState } from "react";

import QUESTIONS from "../questions.js";
import quizCompeteImg from "../assets/quiz-complete.png";

export default function Quiz() {
  // managing state for current question, user answers, and questions
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  function handleClickAnswer(selectedAnswer) {
    setUserAnswers(prevUserAnswers => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompeteImg} alt="Trophy Icon" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  // shuffle answers
  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map(answer => (
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
