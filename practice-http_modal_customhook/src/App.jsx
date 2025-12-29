import { useState, useEffect } from "react";

function App() {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [availablePlaces, setAvailablePlaces] = useState([]);

  console.log(availablePlaces);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);

      try {
        const response = await fetch("http://localhost:3000/places");
        const resData = await response.json();

        if (!response.ok) {
          throw new Error("failed to fetch available places.");
        }

        setAvailablePlaces(resData.places);
      } catch (error) {
        setError(error);
      }

      setIsFetching(false);
    }

    fetchData();
  }, []);

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
