import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNaviation";

export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
