export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch places");
  }

  return resData.places;
}

export async function updateUserPlaces(places) {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    // const places = req.body.places; => an object with places key
    body: JSON.stringify({ places }), //which data?
    headers: {
      "Content-Type": "application/json", // inform backend the request will be in JSON format
    },
  });

  const resData = await response.json();

  // only for 400/500 status
  if (!response.ok) {
    throw new Error("Failed to update user data.");
  }

  return resData.message; // if you check the backed data, the response will contain the messsage property.
}
