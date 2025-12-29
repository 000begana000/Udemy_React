export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("failed to fetch available places.");
  }

  return resData.places;
}

export async function updateSelectedPlaces(places) {
  const response = fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({ places }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resData = (await response).json();

  if (!response.ok) {
    throw new Error("failed to updated selected places");
  }

  return resData.message;
}
