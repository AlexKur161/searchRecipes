export type TRecipe = {
  calories: number;
  cautions: unknown[];
  co2EmissionsClass: string;
  cuisineType: string[];
  dietLabels: string[];
  digest: unknown[];
  dishType: string[];
  healthLabels: string[];
  image: string;
  images: unknown;
  ingredientLines: string[];
  ingredients: unknown[];
  label: string;
  mealType: string[];
  shareAs: string;
  source: string;
  totalCO2Emissions: number;
  totalDaily: unknown[];
  totalNutrients: unknown[];
  totalTime: number;
  totalWeight: number;
  uri: string;
  url: string;
  yield: number;
};
export type Tlinks = {
  self: {
    href: string;
    title: string;
  };
};

export type Card = {
  recipe: TRecipe;
  _links: Tlinks;
};
