import { useState, useCallback } from "react";

import QuestionTimer from "./QuestionTimer.jsx";
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

  // Memoized to avoid unnecesary re-creation of the function and to optimize performance.
  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevState) => {
      return [...prevState, selectedAnswer];
    });
  },
  []);

  // Memoized to create a new fuction that always calls handleSelectAnswer with null
  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    // handleSelectAnswer is indirectly depend on state or props value so we need to use itself as a dependency
    [handleSelectAnswer]
  );

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
        <QuestionTimer timeout={10000} onTimeout={handleSkipAnswer} />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {suffledAnswers.map((answer) => (
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
