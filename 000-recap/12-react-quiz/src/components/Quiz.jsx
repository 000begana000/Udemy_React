// control this quiz and render other quiz related components
import { useState, useCallback } from "react";

import QUESTIONS from "../questions.js";
import QuestionTimer from "./QuestionTimer.jsx";
import quizCompeteImg from "../assets/quiz-complete.png";

export default function Quiz() {
  const [answerState, setAsnwerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  // preventing changing length right after when user choosed the answer, instaed let it stay in the same question index
  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  // Memoized to avoid unnecessary re-creation of the function and to optimize performance.
  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setAsnwerState("answered");
      setUserAnswers(prevUserAnswers => {
        return [...prevUserAnswers, selectedAnswer];
      });

      // define if the user answer is correct or wrong and update state for design purpose
      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAsnwerState("corrent");
        } else {
          setAsnwerState("wrong");
        }

        // reset the answerState to '' after 2 sec
        setTimeout(() => {
          setAsnwerState("");
        }, 2000);
      }, 1000);
    },
    // this function has to be re-created when activeQeustionIndex's value is changed
    [activeQuestionIndex]
  );

  // Memoized to create a new function that always calls handleSelectAnswer with null as an argument, which may have a specific use case in the application.
  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
    // Any function/variable defined in the body of a React component function and referenced in an effect function, should be specified in the dependency array of said hook.
  }, [handleSelectAnswer]);

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
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map(answer => {
            const isSelected = userAnswers[userAnswers.length - 1] === answer;
            let cssClasses = "";

            if (answerState === "answered" && isSelected) {
              cssClasses = "selected";
            }

            if (
              (answerState === "correct" || answerState === "wrong") &&
              isSelected
            ) {
              cssClasses = answerState;
            }

            return (
              <li key={answer} className="answer">
                <button
                  onClick={() => handleSelectAnswer(answer)}
                  className={cssClasses}
                >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
