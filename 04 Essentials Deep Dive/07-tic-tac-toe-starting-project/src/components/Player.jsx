import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  let playerName = <span className="player-name">{name}</span>;

  function handleEditClick() {
    setIsEditing(true);
    console.log(isEditing);
  }

  if (isEditing) {
    playerName = <input className="playerName" type="text" />;
  }

  return (
    <li>
      <span id="player">
        {/* when isEditing is false only span, when it's true input field. */}
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>

      {/* when click event executed then isEditing is true */}
      <button onClick={handleEditClick}>Edit</button>
    </li>
  );
}
