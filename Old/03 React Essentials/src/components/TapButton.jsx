export default function TapButton({ children, onSelect, isSelected }) {
  console.log("Button rendered");
  return (
    <li>
      <button className={isSelected ? "active" : ""} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
