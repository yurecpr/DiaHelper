export interface ProductDataProps {
    name: string,
    image: string,
    calories: number,
    fat: number,
    sugar: number
}

export interface FavoritesContextProps {
    favorites: ProductDataProps[];
    addFavorite: (product: ProductDataProps) => any;
  }