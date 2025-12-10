import { useState, useCallback } from 'react';

import QUESTIONS from '../questions.js';

import quizCompletedImg from '../assets/quiz-complete.png';
import Question from './Question.jsx';

// Switching questions & registering user's answer
export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  // stay at the current answer until we change the color and show user a result
  const activeQuestionIndex = userAnswers.length;

  const quizCompleted = activeQuestionIndex === QUESTIONS.length;

  // it's executed and re-created "ONLY" when it's really called, not every render cycle
  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
  },
  []);

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (quizCompleted) {
    return (
      <div id='summary'>
        <img src={quizCompletedImg} alt='a image of colorful trophy' />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  return (
    <div id='quiz'>
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
