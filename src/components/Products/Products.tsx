import { ChangeEvent, ReactNode, createContext, useContext, useState } from "react";
import Button from "components/Button/Button";
import {
  ButtonWrapper,
  InputButtonWrapper,
  ProductCard,
  ProductImage,
  ProductText,
  ProductTitle,
  ProductsCardsWrapper,
  ProductsContainer,
  ProductsForm,
} from "./styles";
import Input from "components/Input/Input";
import axios from "axios";
import Spinner from "components/Spinner/Spinner";
import { FavoritesContextProps, ProductDataProps } from "./types";
import { ErrorMessage } from "components/LoginForm/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faMagnifyingGlass,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

export const FavoritesContext = createContext<
  FavoritesContextProps | undefined
>(undefined);

export const FavoritesContextProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<ProductDataProps[]>([]);

  const addFavorite = (product: ProductDataProps) => {
    setFavorites((prevFavorites) => [...prevFavorites, product]);
   };
    const removeFromFavorites = (productName: string) => {
      setFavorites((prevFavorites) => prevFavorites.filter((product) => product.name !== productName));
    }

    return (
      <FavoritesContext.Provider value={{ favorites, addFavorite, removeFromFavorites}}>
        {children}
      </FavoritesContext.Provider>
    );
 
};
export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};

function Products() {
  const [product, setProduct] = useState<string>("");
  const [foods, setFoods] = useState<ProductDataProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { addFavorite } = useFavorites();

  const API_URL = "https://api.edamam.com/api/food-database/v2/parser";
  const APP_ID = "c63e1cf8";
  const APP_KEY = "e8c4b6181c7e3d306f3e87008ca63014";

  const fetchFoodData = async (product: string) => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          ingr: product,
          app_id: APP_ID,
          app_key: APP_KEY,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching food data", error);
      return null;
    }
  };

  const searchProduct = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const specialCharPattern = /[^a-zA-Z\s]/;
    if (
      product.trim().length === 0 ||
      !isNaN(Number(product)) ||
      specialCharPattern.test(product)
    ) {
      setError("Enter a valid product name");
      setFoods([]);
      return;
    }
    setIsLoading(true);
    setError(null);
    const data = await fetchFoodData(product);
    console.log(data);
    setIsLoading(false);
    if (data && data.hints.length > 0) {
      const newFoods = data.hints.map((hint: any) => ({
        id: hint.food.foodId,
        name: hint.food.label,
        image: hint.food.image,
        calories: hint.food.nutrients.ENERC_KCAL.toFixed(1),
        fat: hint.food.nutrients.FAT.toFixed(1),
      }));
      console.log(newFoods);
      setFoods(newFoods);
    } else {
      setFoods([]);
      setError("No results found");
    }
  };

  const onChangeProduct = (event: ChangeEvent<HTMLInputElement>) => {
    setProduct(event.target.value);
  };

  const renderProductCards = () => {
    return foods.map((food, index) => (
      <ProductCard key={index}>
        <ProductTitle>{food.name}</ProductTitle>
        {food.image ? (
          <ProductImage src={food.image} alt={food.name} />
        ) : (
          <FontAwesomeIcon icon={faUtensils} size="5x" />
        )}
        <ProductText>{food.calories} kcal</ProductText>
        <ProductText>Fat: {food.fat}</ProductText>

        <Button onButtonClick={() => addFavorite(food)}>
          <FontAwesomeIcon icon={faHeart} /> Add to Favorites
        </Button>
      </ProductCard>
    ));
  };

  return (
    <ProductsContainer>
      <ProductsForm onSubmit={searchProduct}>
        <InputButtonWrapper>
          <Input
            placeholder="Enter product name"
            onInputChange={onChangeProduct}
            value={product}
            name="product"
          />
          <ButtonWrapper>
            <Button type="submit">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Button>
          </ButtonWrapper>
        </InputButtonWrapper>
      </ProductsForm>
      {isLoading && <Spinner />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {foods.length > 0 && (
        <ProductsCardsWrapper>{renderProductCards()}</ProductsCardsWrapper>
      )}
    </ProductsContainer>
  );
}
export default Products;
