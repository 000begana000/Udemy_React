import { useState, useEffect } from "react";

import Places from "./components/Places";
import SelectedPlaces from "./components/SelectedPlaces";
import { updateSelectedPlaces } from "./http";
import { fetchSelectedPlaces } from "./http";
import Modal from "./components/UI/Modal";

function App() {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [places, setPlaces] = useState([]);
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [errorUpdatingPlace, setErrorUpdatingPlace] = useState();

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);

      try {
        const data = await fetchSelectedPlaces();
        setSelectedPlaces(data);
      } catch (error) {
        setError({
          message: error.message || "failed to fetch selected places.",
        });
      }
      setIsFetching(false);
    }

    fetchData();
  }, []);

  async function handleSelectPlace(newPlace) {
    setSelectedPlaces(prevPlaces => [newPlace, ...prevPlaces]);
    setPlaces(prevPlaces =>
      prevPlaces.filter(place => place.id !== newPlace.id)
    );

    try {
      await updateSelectedPlaces([newPlace, ...selectedPlaces]);
    } catch (error) {
      setSelectedPlaces(selectedPlaces);
      setPlaces(places);
      setErrorUpdatingPlace(true);
    }
  }

  function handleSetPlaces(places) {
    setPlaces(places);
  }

  async function handleRemovePlace(newPlace) {
    setSelectedPlaces(prevPlaces =>
      prevPlaces.filter(place => place.id !== newPlace.id)
    );
    setPlaces();

    try {
      await updateSelectedPlaces(selectedPlaces);
    } catch (error) {
      setPlaces(places);
      setSelectedPlaces(selectedPlaces);
    }
  }

  function handleError() {
    setErrorUpdatingPlace(null);
  }

  return (
    <>
      <Modal open={errorUpdatingPlace} onClose={handleError} />
      {isFetching && <p>loading...</p>}
      {!isFetching && (
        <SelectedPlaces
          selectedPlaces={selectedPlaces}
          onRemovePlace={handleRemovePlace}
        />
      )}
      <Places
        places={places}
        setPlaces={handleSetPlaces}
        onSelectPlace={handleSelectPlace}
      />
    </>
  );
}

export default App;
