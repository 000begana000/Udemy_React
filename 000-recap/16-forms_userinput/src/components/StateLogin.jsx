import { useState } from "react";

import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";

export default function StateLogin() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  // validate after the user has edited the field
  const emailIsInvalid =
    didEdit.email &&
    !isEmail(enteredValues.email) &&
    !isNotEmpty(enteredValues.email);

  const passwordIsInvalid =
    didEdit.password && !hasMinLength(enteredValues.password, 6);

  function handleSubmit(event) {
    event.preventDefault();

    if (emailIsInvalid) {
      return; // Early return to prevent further execution
    }
    console.log(enteredValues);

    setEnteredValues({
      email: "",
      password: "",
    });
  }

  // onchange is called by every keystroke
  function handleInputChange(identifier, value) {
    setEnteredValues(prevState => ({
      ...prevState,
      [identifier]: value, //already extracted from onChange event
    }));

    // reset the validation when the user starts to type again
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          onChange={event => handleInputChange("email", event.target.value)}
          value={enteredValues.email}
          error={emailIsInvalid && "Please enter a valid email address."}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur("password")}
          onChange={event => handleInputChange("password", event.target.value)}
          value={enteredValues.password}
          error={passwordIsInvalid && "Password must be at least 6 characters."}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
