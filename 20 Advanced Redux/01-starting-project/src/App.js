import { Fragment } from "react";
import { useSelector } from "react-redux";

import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";

function App() {
  const auth = useSelector((state) => state.auth);

  return (
    <Fragment>
      <Header />
      {!auth && <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
