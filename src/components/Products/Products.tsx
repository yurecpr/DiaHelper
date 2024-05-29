import Button from "components/Button/Button";
import {
  ButtonWrapper,
  InputButtonWrapper,
  ProductsContainer,
  ProductsForm,
} from "./styles";
import Input from "components/Input/Input";
import { ChangeEvent, useState } from "react";

function Products() {
  const [product, setProduct] = useState<string>("");

  const app_id: string = "f38d205f'";
  const app_key: string = "977b04b5d40af06f2c60e45f4ec59332	";

  const getProductData = async () => {
    
    const specialCharPattern = /[^a-zA-Z\s]/;
    if (
      product.trim().length === 0 ||
      !isNaN(Number(product)) ||
      specialCharPattern.test(product)
    ) {
      return alert("Enter valid product name");
    }

    const api_url = `https://api.edamam.com/api/food-database/v2/parser?app_id=${app_id}&app_key=${app_key}&ingr=${product}`;
   
    try {
      const response = await fetch(api_url);
    
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      console.log(result);

    } catch (error) {
      console.error("Error:", error);
      
    }
  };

  const onChangeProduct = (event: ChangeEvent<HTMLInputElement>) => {
    setProduct(event.target.value);
  };

  return (
    <ProductsContainer>
      <ProductsForm>
        <InputButtonWrapper>
          <Input
            placeholder="Enter product name"
            onInputChange={onChangeProduct}
            value={product}
            name="product"
          />
          <ButtonWrapper>
            <Button name="search" onButtonClick={getProductData} />
          </ButtonWrapper>
        </InputButtonWrapper>
      </ProductsForm>
    </ProductsContainer>
  );
}

export default Products;
