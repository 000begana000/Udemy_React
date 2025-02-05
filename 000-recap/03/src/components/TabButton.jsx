export default function TabButton({ children, onSelect }) {
  console.log("TabButton Component Executing");
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
