import { Link } from "react-router-dom";

const EVENTS = [
  { title: "event1", id: "e1" },
  { title: "event2", id: "e2" },
  { title: "event3", id: "e3" },
  { title: "event4", id: "e4" },
];

export default function EventsPage() {
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {EVENTS.map((e) => (
          <li key={e.id}>
            <Link to={e.id}>{e.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
