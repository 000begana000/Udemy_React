export default function SelectedPlaces({ selectedPlaces, onRemovePlace }) {
  return (
    <ul>
      <h1>Selected Places</h1>
      {selectedPlaces.length === 0 && <p>No place yet.</p>}
      {selectedPlaces.map(place => (
        <li key={place.title}>
          <button onClick={() => onRemovePlace(place)}>{place.title}</button>
        </li>
      ))}
    </ul>
  );
}
