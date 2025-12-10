import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  // we manage 1 single state(hook) for each input field
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  // validation
  const valueIsValid = validationFn(enteredValue);

  function handleInputChange(event) {
    setEnteredValue(event.target.value);

    // reset the validation when the user starts to type again
    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }

  return {
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
    hasError: !valueIsValid && didEdit,
  };
}
