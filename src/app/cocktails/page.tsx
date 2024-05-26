import Link from "next/link";

import styles from "../index.module.css";
import { type Drink, type DrinkList } from "../_types/drinks";

export default async function Cocktails() {
  const res = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
  );
  const cocktails: DrinkList = (await res.json()) as DrinkList;
  return (
    <div>
      {cocktails.drinks.map((drink: Drink) => (
        <Link
          key={drink.idDrink}
          className={styles.card}
          href="https://create.t3.gg/en/usage/first-steps"
          target="_blank"
        >
          <img src={drink.strDrinkThumb} height={100} width={100} />
          <h3 className={styles.cardTitle}>{drink.strDrink}</h3>
          <div className={styles.cardText}>{drink.strInstructions}</div>
        </Link>
      ))}
    </div>
  );
}
