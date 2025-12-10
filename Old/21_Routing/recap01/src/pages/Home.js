import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/products");
  }
  return (
    <>
      <h1>My Homepage</h1>
      <Link to="/products">the list of products</Link>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}
