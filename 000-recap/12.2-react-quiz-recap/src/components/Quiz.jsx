import { useState } from "react";
import QUESTIONS from "../questions";

import completeImg from "../assets/quiz-complete.png";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  console.log(activeQuestionIndex);

  const quizIsComplete = QUESTIONS.length === activeQuestionIndex;

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers(prevUserAnswers => [...prevUserAnswers, selectedAnswer]);
  }

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={completeImg} alt="trophy icon" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  // shuffle answer
  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map(answer => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
