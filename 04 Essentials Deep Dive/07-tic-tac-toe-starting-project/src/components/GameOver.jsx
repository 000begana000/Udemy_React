export default function GameOver({ winner }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} Won!</p>}
      {!winner && <p>it's draw!</p>}
      <p>
        <button>Rematch!</button>
      </p>
    </div>
  );
}
