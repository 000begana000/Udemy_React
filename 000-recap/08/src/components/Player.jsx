import { useState } from 'react';
export default function Player() {
  const [userName, SetUserName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setSubmitted(false);
    SetUserName(event.target.value);
  }

  function handleClick() {
    setSubmitted(true);
  }

  return (
    <section id='player'>
      <h2>Welcome {submitted ? userName : 'unknown entity'}</h2>
      <p>
        <input type='text' onChange={handleChange} value={userName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
