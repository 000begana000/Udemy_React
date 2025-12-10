import MealItem from "./MealItem";
import Error from "./Error";

import useHttp from "../hooks/useHttp";

const requestConfig = {};

export default function Meals() {
  const {
    data: meals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if (error) {
    return <Error title="failed to fetch meals" message={error} />;
  }

  return (
    <ul id="meals">
      {meals.map(meal => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
