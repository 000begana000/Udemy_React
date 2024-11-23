import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./components/Home";
import EventsPage from "./components/Events";
import EventDetailPage from "./components/EventDetail";
import NewEventPage from "./components/NewEvent";
import EditEventPage from "./components/EditEvent";
import RootLayout from "./components/Root";

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
      { path: "events", element: <EventsPage /> },
      { path: "events/:eventId", element: <EventDetailPage /> },
      { path: "events/new", element: <NewEventPage /> },
      { path: "events/:eventId/edit", element: <EditEventPage /> },
    ],
  },
]);

// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

function App() {
  return <RouterProvider router={router} />;
}

export default App;
