import { useEffect, useState } from "react";

export function useFetch(fetchFn, initialValue) {
  const [isFetching, setIsFetching] = useState(); // loading
  const [error, setError] = useState(); // error
  const [fetchedData, setFetchedData] = useState(initialValue); // data

  useEffect(() => {
    async function fetchData() {
      //genetic name
      setIsFetching(true);
      try {
        const data = await fetchFn(); // genetic name & fetch function from parameter
        setFetchedData(data);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch data." });
      }

      setIsFetching(false);
    }

    fetchData();
  }, [fetchFn]); // it's data from outside, therefore when it's changed, useEffect function has to be called

  // returning state values
  return {
    isFetching,
    error,
    fetchedData,
    setFetchedData, // to update data
  };
}
