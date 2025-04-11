import { useState } from "react";
import QUESTIONS from "../questions";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  console.log(activeQuestionIndex);

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers(prevUserAnswers => [...prevUserAnswers, selectedAnswer]);
  }

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {QUESTIONS[activeQuestionIndex].answers.map(answer => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(selectedAnswer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
