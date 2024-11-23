import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";
// 4. Add properly working links to the MainNavigation
// { index: true, element: <HomePage /> },
// { path: "/events", element: <EventsPage /> },
// { path: "/events/:eventId", element: <EventDetailPage /> },
// { path: "/events/new", element: <NewEventPage /> },
// { path: "/events/:eventId/edit", element: <EditEventPage /> },
function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Events
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
