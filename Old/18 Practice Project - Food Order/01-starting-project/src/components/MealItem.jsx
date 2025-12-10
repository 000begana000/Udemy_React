import { useContext } from "react";

import Button from "./UI/Button.jsx";
import { currencyFormatter } from "../util/formatting.js";

import CartContext from "../store/CartContext.jsx";

export default function MealItem({ meal }) {
  const { addItem } = useContext(CartContext);

  function handleAddMealToCart() {
    addItem(meal); // coming directly from props
  }

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddMealToCart}>Add To Cart</Button>
        </p>
      </article>
    </li>
  );
}
