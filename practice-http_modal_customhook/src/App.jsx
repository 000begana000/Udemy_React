import { useState, useEffect } from "react";

import ErrorPage from "./components/ErrorPage";
import { fetchAvailablePlaces } from "./http";

function App() {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);

      try {
        const places = await fetchAvailablePlaces();
        setAvailablePlaces(places);
      } catch (error) {
        setError({ message: error.message || "failed to fetch data" });
      }

      setIsFetching(false);
    }

    fetchData();
  }, []);

  if (error) {
    return <ErrorPage title={error.message} />;
  }

  return (
    <>
      {isFetching && <p>loading...</p>}
      {!isFetching && (
        <ul>
          {availablePlaces.map(place => (
            <li key={place.id}>{place.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
