import { useState } from "react";

// Show currently active question to the user
// When user answers a question then switch to the next question
// 1. switching between questions
// 2. registering user answers

export default function Quiz() {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  return <p>Currently Active Question</p>;
}
