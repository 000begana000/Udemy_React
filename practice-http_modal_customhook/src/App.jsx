import { useState, useEffect } from "react";

import { fetchAvailablePlaces } from "./http";

function App() {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);

      try {
        const places = fetchAvailablePlaces();
        setAvailablePlaces(places);
      } catch (error) {
        setError({
          message: error.message || "failed to fetch available places.",
        });
      }

      setIsFetching(false);
    }

    fetchData();
  }, []);

  return <h1>practice</h1>;
}

export default App;
