import { useState, useCallback } from 'react';

import QuestionTimer from './QuestionTimer.jsx';

import QUESTIONS from '../questions.js';
import quizCompletedImg from '../assets/quiz-complete.png';

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

  // it fires everytime we changes color of selected answer!
  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id='quiz'>
      <div id='question'>
        <QuestionTimer
          // without key prop, QuestionTimer component will not re-created because there is no change.
          key={activeQuestionIndex}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id='answers'>
          {shuffledAnswers.map((answer) => {
            // after updating current user answer(the last element) we make sure if this specific answer is selected
            const isSelected = userAnswers[userAnswers.length - 1] === answer;
            let cssClass = '';

            if (answerState === 'answered' && isSelected) {
              cssClass = 'selected';
            }

            if (
              (answerState === 'correct' || answerState === 'wrong') &&
              isSelected
            ) {
              cssClass = answerState;
            }

            return (
              <li key={answer} className='answer'>
                <button
                  onClick={() => handleSelectAnswer(answer)}
                  className={cssClass}
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
