import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        go to <Link to="/products">Product page</Link>
      </p>
    </>
  );
}

export default HomePage;
