import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./components/Home";
import EventsPage, { loader as eventsLoader } from "./components/Events";
import EventDetailPage from "./components/EventDetail";
import NewEventPage from "./components/NewEvent";
import EditEventPage from "./components/EditEvent";
import RootLayout from "./components/Root";
import EventsRootLayout from "./components/EventsRoot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          { path: ":eventId", element: <EventDetailPage /> },
          { path: "new", element: <NewEventPage /> },
          { path: ":eventId/edit", element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
