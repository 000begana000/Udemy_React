export default function TapButton({ children, onSelect }) {
  console.log("Button rendered");
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
