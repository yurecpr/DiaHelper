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

function Products() {
  const [product, setProduct] = useState<string>("");
  const [foods, setFoods] = useState<ProductDataProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
    setIsLoading(false);
    if (data && data.hints.length > 0) {
      const newFoods = data.hints.map((hint: any) => ({
        name: hint.food.label,
        image: hint.food.image,
        calories: hint.food.nutrients.ENERC_KCAL,
        fat: hint.food.nutrients.FAT,
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
        <ProductImage src={food.image} alt={food.name} />
        <ProductText>Calories: {food.calories}</ProductText>
        <ProductText>Fat: {food.fat}</ProductText>
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
            <Button name="search" type="submit" />
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
