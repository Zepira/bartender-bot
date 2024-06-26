export interface DrinkList {
  drinks: Drink[];
}

export interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate: string | null;
  strTags?: string;
  strVideo: string | null;
  strCategory: string;
  strIBA?: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strInstructionsES: string | null;
  strInstructionsDE?: string;
  strInstructionsFR: string | null;
  strInstructionsIT: string;
  "strInstructionsZH-HANS": string | null;
  "strInstructionsZH-HANT": string | null;
  strDrinkThumb: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strIngredient7?: string;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4?: string;
  strMeasure5?: string;
  strMeasure6?: string;
  strMeasure7?: string;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;
  strImageSource?: string;
  strImageAttribution?: string;
  strCreativeCommonsConfirmed: string;
  dateModified?: string;
}
