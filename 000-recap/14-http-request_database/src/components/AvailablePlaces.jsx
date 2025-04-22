import { useState, useEffect } from "react";

// get the places info from browser local storage
const places = localStorage.getItem("places");

import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    // update UI with get request
    fetch("http://localhost:3000/places")
      .then(response => {
        return response.json(); //returns another promise
      })
      .then(resData => {
        console.log(resData);
        setAvailablePlaces(resData.places);
      });
  }, []);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
