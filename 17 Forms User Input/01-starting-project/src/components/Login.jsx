import { useRef, useState } from "react";

export default function Login() {
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

  const email = useRef();
  const password = useRef();

  // check the validation when the form is submitted
  function handleSubmit(event) {
    event.preventDefault();

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    const emailIsValid = enteredEmail.includes("@");

    if (!emailIsValid) {
      setEmailIsInvalid(true);
      return; //safe clause; - secure that any http request will not be sent if the validation is invalid
    }

    // after user enetered validate input the error message goes away
    setEmailIsInvalid(false);

    console.log("sending http request...");
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
