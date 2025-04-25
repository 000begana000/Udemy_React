import { useState, useEffect } from "react";

// get the places info from browser local storage
const places = localStorage.getItem("places");

import Places from "./Places.jsx";
import ErrorPage from "./Error.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false); // loading state
  const [availablePlaces, setAvailablePlaces] = useState([]); // data state
  const [error, setError] = useState();

  useEffect(() => {
    // update UI with get request
    async function fetchPlaces() {
      setIsFetching(true); // loading state

      try {
        const response = await fetch("http://localhost:3000/placessss");
        const resData = await response.json();

        // 400
        if (!response.ok) {
          throw new Error("Failed to fetch places");
        }

        setAvailablePlaces(resData.places);
      } catch (error) {
        // handle the error - update UI and show an error message to user
        setError({
          message:
            error.message || "Could not fetch places, please try again later",
        }); // error message from Error object
      }

      setIsFetching(false); // loading state
    }

    fetchPlaces();
  }, []);

  // error from error state
  if (error) {
    return <ErrorPage title="An error occured!" meessage={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
