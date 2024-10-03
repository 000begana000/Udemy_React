import { useState, useCallback } from 'react';

import QUESTIONS from '../questions.js';

import quizCompletedImg from '../assets/quiz-complete.png';
import Question from './Question.jsx';

// Switching questions & registering user's answer
export default function Quiz() {
  const [answerState, setAnswerState] = useState(''); // '' means unanswered
  const [userAnswers, setUserAnswers] = useState([]);

  // stay at the current answer until we change the color and show user a result
  const activeQuestionIndex =
    answerState === '' ? userAnswers.length : userAnswers.length - 1;

  const quizCompleted = activeQuestionIndex === QUESTIONS.length;

  // it's executed and re-created "ONLY" when it's really called, not every render cycle
  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      // change color of selected answer BEFORE we move on to the next question.
      setAnswerState('answered');

      setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);

      setTimeout(() => {
        // because of this line of code, we need to use activeQuestionIndex as a dependency
        // it's not just updating but deriving, so we want to make sure that we get the latest info
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState('correct');
        } else {
          setAnswerState('wrong');
        }

        // show the user the result for 2 sec and move forward to the next question
        setTimeout(() => {
          setAnswerState('');
        }, 2000);
      }, 1000);
    },
    // to ensure the function works correctly, we should add activeQuestionIndex - to re-created when this value is changed
    [activeQuestionIndex]
  );

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
        quesitonText={QUESTIONS[activeQuestionIndex].text}
        answers={QUESTIONS[activeQuestionIndex].answers}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        answerState={answerState}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
