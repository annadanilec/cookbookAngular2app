export class Recipe {
  id: number;
  cat: string;
  title: string;
  serving: number;
  image: string;
  description: string;
  ingredients: Array<{name: string, quantity: number, value: string}>;
}
