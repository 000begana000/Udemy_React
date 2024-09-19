import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(event) {
    setIsSubmitted(false);
    setPlayerName(event.target.value);
  }

  function handleClick() {
    setIsSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome, {isSubmitted ? playerName : "unknown entity"}!</h2>
      <p>
        <input type="text" onChange={handleChange} value={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
