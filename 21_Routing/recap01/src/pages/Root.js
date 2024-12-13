import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation.js";
import classes from "./Root.module.css";

export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
}
