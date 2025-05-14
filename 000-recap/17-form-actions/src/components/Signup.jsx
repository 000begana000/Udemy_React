import { useActionState } from "react";

import {
  isEmail,
  isNotEmpty,
  isEqualToOtherValue,
  hasMinLength,
} from "../util/validation.js";

export default function Signup() {
  // when action function is called by useActionState, react gives you the last form state - so first argument is the last form state
  function signupAction(prevFormState, formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm-password");
    const firstName = formData.get("first-name");
    const lastName = formData.get("last-name");
    const role = formData.get("role");
    const terms = formData.get("terms");
    const acquisitionChannel = formData.getAll("acquisition"); // multiple

    let errors = [];

    // email validation
    if (!isEmail(email)) {
      errors.push("Invalid email address.");
    }

    // password validation
    if (!isNotEmpty(password) && !hasMinLength(password, 6)) {
      errors.push("Password must be at least 6 characters long.");
    }

    // confirm password validation
    if (!isEqualToOtherValue(password, confirmPassword)) {
      errors.push("Passwords do not match.");
    }

    // full name validation
    if (isNotEmpty(firstName) || isNotEmpty(lastName)) {
      errors.push("First name and last name are required.");
    }

    // role validation
    if (isNotEmpty(role)) {
      errors.push("Please select a role.");
    }

    // terms and conditions validation
    if (!terms) {
      errors.push("You must agree to the terms and conditions.");
    }

    // acquisition channel validation
    if (acquisitionChannel.length === 0) {
      errors.push("Please select at least one acquisition channel.");
    }

    // if there are errors, return them
    if (errors.length > 0) {
      return { errors };
    }

    // if there are no errors, return null
    return { errors: null };
  }

  // formState = form state value, which is returned from the action function
  // formAction = form action(signupAction) inhanced by react, with extra features with react aware of the form state
  // pending = boolean value to check if the form is submitted or not
  const [formState, formAction, pending] = useActionState(signupAction, {
    errors: null,
  });

  return (
    <form action={formAction}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
          />
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" />
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" name="role">
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" name="terms" />I
          agree to the terms and conditions
        </label>
      </div>

      {/* display error message when there is error */}
      {formState.errors && (
        <ul className="error">
          {formState.errors.map(error => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button className="button">Sign up</button>
      </p>
    </form>
  );
}
