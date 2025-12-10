import { useState } from "react";

import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";

import { calculateInvestmentResults } from "./util/investment.js";

const INITIAL_VALUES = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState(INITIAL_VALUES);

  const inputIsValid = userInput.duration >= 1;

  function handleInputChange(selectedInput, newValue) {
    setUserInput((prevValues) => {
      const updatedValues = {
        ...prevValues,
        // +newValue : input is always string so need to change the datatype into number
        [selectedInput]: +newValue,
      };
      return updatedValues;
    });
  }

  return (
    <>
      <UserInput onInputChange={handleInputChange} userInput={userInput} />
      {!inputIsValid && (
        <p className="center">Please enter duration greater than 0</p>
      )}
      {inputIsValid && <Result input={userInput} />}
    </>
  );
}

export default App;
