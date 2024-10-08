import { useState, useEffect } from "react";

import Places from "./Places.jsx";
import ErrorPage from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  // loading state
  const [isFetching, setIsFetching] = useState(false);
  // data state
  const [availablePlaces, setAvailablePlaces] = useState([]);
  // errer state
  const [error, setError] = useState();

  // TODO: fetch available places from backend API
  useEffect(() => {
    async function fetchPlaces() {
      try {
        setIsFetching(true);
        /// these codes are in http.js but it's optional
        // const response = await fetch("http://localhost:3000/places");
        // const resData = await response.json();

        // if (!response.ok) {
        //   throw new Error("Failed to fetch places");
        // }
        const places = await fetchAvailablePlaces();

        // fetch user's location
        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            places, //resData.places
            position.coords.latitude,
            position.coords.longitude
          );
          // if it works we know that fetching is successful
          setAvailablePlaces(sortedPlaces);
          // we can't await the navigator function
          setIsFetching(false);
        });
      } catch (error) {
        setError({
          message:
            error.message || "Could not fetch places, please try again later.",
        });
        setIsFetching(false);
      }
    }

    fetchPlaces();
  }, []);

  if (error) {
    return <ErrorPage title="An error occured!" message={error.message} />;
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
