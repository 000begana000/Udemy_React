import { useState, useRef } from "react";

export default function Player() {
  // 2-way-binding via ref
  const playerName = useRef();

  const [isSubmmited, setIsSubmitted] = useState(false);
  const [enteredPlayerName, setEnteredPlayerName] = useState("");

  function handleClick() {
    setIsSubmitted(true);
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {isSubmmited ? enteredPlayerName : "unknown entity"}!</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
