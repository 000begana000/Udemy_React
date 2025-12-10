//import { useState } from "react";

// onChange
// setUserInput (immutable way)
// update value and return
// => where should we store it?

// const INITIAL_VALUES = {
//     initialInvestment: 10000,
//     annualInvestment: 1200,
//     expectedReturn: 6,
//     duration: 10,
//   };

export default function UserInput({ onInputChange, userInput }) {
  //   const [userInput, setUserInput] = useState(INITIAL_VALUES);

  //   function handleChange(selectedInput, newValue) {
  //     setUserInput((prevValues) => {
  //       const updatedValues = {
  //         ...prevValues,
  //         [selectedInput]: newValue,
  //       };
  //       return updatedValues;
  //     });
  //   }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investement</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onInputChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investement</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onInputChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              onInputChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => onInputChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
