import { useState, useEffect } from "react";

import { fetchUserPlaces } from "./http";
import { fetchAvailablePlaces } from "./http";
import { updateSelectedPlaces } from "./http";

import ErrorPage from "./components/ErrorPage";
import Modal from "./components/Modal";

function App() {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [userPlaces, setUserPlaces] = useState([]);
  const [errorUpdatingData, setErrorUpdatingData] = useState();

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);

      try {
        const places = await fetchUserPlaces();
        setUserPlaces(places);
      } catch (error) {
        setError({ message: error.message || "failed to fetch selected data" });
      }

      setIsFetching(false);
    }

    fetchData();
  }, []);

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

  async function handleAddPlace(newPlace) {
    setSelectedPlaces([newPlace, ...selectedPlaces]);
    setAvailablePlaces(prevPlaces =>
      prevPlaces.filter(place => place.id !== newPlace.id)
    );

    try {
      await updateSelectedPlaces([newPlace, ...selectedPlaces]);
    } catch (error) {
      setSelectedPlaces(selectedPlaces);
      setAvailablePlaces(availablePlaces);
      setErrorUpdatingData(true);
    }
  }

  function handleError() {
    setErrorUpdatingData(null);
  }

  if (error) {
    return <ErrorPage title={error.message} />;
  }

  return (
    <>
      <Modal
        message="Faild to update data"
        open={errorUpdatingData}
        onClose={handleError}
      />
      <div>
        <h1>Selected Places</h1>
        {userPlaces.length === 0 && <p>no place yet</p>}
        <ul>
          {isFetching && <p>loading...</p>}
          {!isFetching &&
            userPlaces.map(place => (
              <li key={place.id}>
                <button>{place.title}</button>
              </li>
            ))}
        </ul>
      </div>
      <div>
        <h1>Available Places</h1>
        {isFetching && <p>loading...</p>}
        {!isFetching && (
          <ul>
            {availablePlaces.map(place => (
              <li key={place.id}>
                <button onClick={() => handleAddPlace(place)}>
                  {place.title}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
