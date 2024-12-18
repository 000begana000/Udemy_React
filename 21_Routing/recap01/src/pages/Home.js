import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <h1>My Homepage</h1>
      <Link to="/products">the list of products</Link>
    </>
  );
}
