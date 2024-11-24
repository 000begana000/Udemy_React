import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./components/Home";
import EventsPage from "./components/Events";
import EventDetailPage from "./components/EventDetail";
import NewEventPage from "./components/NewEvent";
import EditEventPage from "./components/EditEvent";
import RootLayout from "./components/Root";
import EventsRootLayout from "./components/EventsRoot";

// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
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
          { index: true, element: <EventsPage /> },
          { path: ":eventId", element: <EventDetailPage /> },
          { path: "new", element: <NewEventPage /> },
          { path: ":eventId/edit", element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

function App() {
  return <RouterProvider router={router} />;
}

export default App;
