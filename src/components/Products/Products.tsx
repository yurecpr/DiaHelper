import { ChangeEvent, useState } from "react";
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
import { ProductDataProps } from "./types";
import { ErrorMessage } from "components/LoginForm/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faMagnifyingGlass,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";


function Products() {
  const [product, setProduct] = useState<string>("");
  const [foods, setFoods] = useState<ProductDataProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [addedFavorites, setAddedFavorites] = useState<{ [key: string]: boolean }>({});

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
        productTitle: hint.food.label,
        image: hint.food.image,
        calories: Number(hint.food.nutrients.ENERC_KCAL.toFixed(1)),
        carbohydrate: Number(hint.food.nutrients.CHOCDF.toFixed(1)),
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

  const addFavorite = async (product: ProductDataProps) => {
    try {
      console.log(product);
      await axios.post("/api/users/favorites/add", {
        productTitle: product.productTitle,
        calories: product.calories,
      });
      setAddedFavorites((prevFavorites) => ({
        ...prevFavorites,
        [product.productTitle]: true,
      }));
    } catch (error) {
      console.error("Error adding favorite", error);
    }
  };

  const renderProductCards = () => {
    return foods.map((food, index) => (
      <ProductCard key={index}>
        <ProductTitle>{food.productTitle}</ProductTitle>
        {food.image ? (
          <ProductImage src={food.image} alt={food.productTitle} />
        ) : (
          <FontAwesomeIcon icon={faUtensils} size="5x" />
        )}
        <ProductText>{food.calories} kcal / 100g</ProductText>
        <ProductText>Carbohydrate: {food.carbohydrate}g</ProductText>

        <Button onButtonClick={() => addFavorite(food)}
         disabled={addedFavorites[food.productTitle]}
          >
          <FontAwesomeIcon icon={faHeart}  style={{ color: addedFavorites[food.productTitle] ? "red" : "white" }}/>
          {addedFavorites[food.productTitle] ? "Added" : "Add to Favorites"}
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
