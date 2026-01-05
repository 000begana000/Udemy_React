import { useState, useEffect } from "react";

import { fetchPlaces } from "../http";

export default function Places({ places, setPlaces, onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const places = await fetchPlaces();

        setPlaces(places);
        setIsFetching(false);
      } catch (error) {
        setError(error.message || "failed to fetch");
      }
    }

    fetchData();
  }, []);

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <ul>
        <h1>Suggested Places</h1>
        {isFetching && <h1>Loading....</h1>}
        {!isFetching &&
          places.map(place => (
            <li key={place.id}>
              <button onClick={() => onSelectPlace(place)}>
                {place.title}
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}
