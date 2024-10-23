export default function ErrorMessage({ title, message }) {
  return (
    <div className="error">
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  );
}
