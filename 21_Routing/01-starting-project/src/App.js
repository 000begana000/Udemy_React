import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

function App() {
  return <RouterProvider router={router} />; // the value of router should be const router above
}

export default App;
