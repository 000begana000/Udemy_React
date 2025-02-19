import { useState } from "react";

import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

// [{
//   initialInvestment,
//   annualInvestment,
//   expectedReturn,
//   duration,
// }] = return annualData

// import insvestment.js calculator

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <UserInput onChange={handleChange} userInput={userInput} />
      <Results userInput={userInput} />
    </>
  );
}

export default App;
