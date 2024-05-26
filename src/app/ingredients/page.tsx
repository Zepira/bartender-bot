import Link from "next/link";
import Image from "next/image"; // Import the Image component

import styles from "../index.module.css";
import { type Drink, type IngredientList } from "../_types/ingredients";

export default async function Ingredients() {
  const res = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
  );
  const ingredients: IngredientList = (await res.json()) as IngredientList;
  return (
    <div>
      {ingredients.drinks.map((drink: Drink) => (
        <Link
          key={drink.strIngredient1}
          className={styles.card}
          href="https://create.t3.gg/en/usage/first-steps"
          target="_blank"
        >
          <Image
            src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient1}-medium.png`}
            height={100}
            width={100}
            alt={drink.strIngredient1} // Add the alt prop with meaningful text
          />
          <h3 className={styles.cardTitle}>{drink.strIngredient1}</h3>
        </Link>
      ))}
    </div>
  );
}
