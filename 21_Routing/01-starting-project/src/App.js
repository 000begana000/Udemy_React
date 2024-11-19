import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";

const routeDefinition = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<ProductsPage />} />
  </Route>
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },
//   { path: "/products", element: <ProductsPage /> },
// ]);

const router = createBrowserRouter(routeDefinition);

function App() {
  return <RouterProvider router={router} />; // the value of router should be const router above
}

export default App;
