import { useState, useCallback } from "react";

import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import quizCompleteImage from "../assets/quiz-complete.png";

// Show currently active question to the user
// When user answers a question then switch to the next question
// ( always first question is correct and therefore we need to shuffle them to display )
// 1. switching between questions
// 2. registering user answers

export default function Quiz() {
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  // because index starts from 0
  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  // Memoized to avoid unnecesary re-creation of the function and to optimize performance.
  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setAnswerState("answered");
      setUserAnswers((prevState) => {
        return [...prevState, selectedAnswer];
      });

      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState("corrent");
        } else {
          setUserAnswers("wrong");
        }

        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    // this useCallback function should be re-executed when activeQuestionIndex is changed
    [activeQuestionIndex]
  );

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

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        questionText={QUESTIONS[activeQuestionIndex].text}
        answers={QUESTIONS[activeQuestionIndex].answers}
        onSelectAnswer={handleSelectAnswer}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        answerState={answerState}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
