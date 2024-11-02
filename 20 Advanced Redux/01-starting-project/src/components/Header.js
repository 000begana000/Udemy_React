import { useSelector } from "react-redux";
import classes from "./Header.module.css";

const Header = () => {
  const auth = useSelector((state) => state.auth);

  const loggedIn = (
    <nav>
      <ul>
        <li>
          <a href="/">My Products</a>
        </li>
        <li>
          <a href="/">My Sales</a>
        </li>
        <li>
          <button>Logout</button>
        </li>
      </ul>
    </nav>
  );

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {auth && loggedIn}
    </header>
  );
};

export default Header;
