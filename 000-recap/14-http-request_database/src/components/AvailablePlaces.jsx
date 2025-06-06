import { useState, useEffect } from "react";

// get the places info from browser local storage
const places = localStorage.getItem("places");

import Places from "./Places.jsx";
import ErrorPage from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);

      try {
        // this will return promise so await it.
        const places = await fetchAvailablePlaces();

        // works at some point when we got the position
        navigator.geolocation.getCurrentPosition(position => {
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false); // call this after we sorting and set the places
        });
      } catch (error) {
        setError({
          message:
            error.message || "Could not fetch places, please try again later",
        });
        setIsFetching(false); // call this after we set error
      }

      // setIsFetching(false); => if it's here, it's called too fast, before we sort the places
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
