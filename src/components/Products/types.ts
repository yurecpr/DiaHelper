export interface ProductDataProps {
    id: string,
    name: string,
    image: string,
    calories: number,
    fat: number,
    sugar: number
}

export interface FavoritesContextProps {
    favorites: ProductDataProps[];
    addFavorite: (product: ProductDataProps) => any;
    removeFromFavorites: (productName: string) => any;
  }