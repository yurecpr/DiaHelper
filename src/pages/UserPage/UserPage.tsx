import { useEffect, useState } from "react";
import User from "types/User";
import {
  FavoriteInfoContainer,
  FormWrapper,
  InputButtonWrapper,
  RemoveButtonWrapper,
  UserFavoriteContainer,
  UserInfoContainer,
  UserInfoWrapper,
  UserMenuContainer,
  UserName,
  UserPageContainer,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faChevronDown,
  faChevronUp,
  faFaceGrinBeam,
  faTrash,

} from "@fortawesome/free-solid-svg-icons";
import Button from "components/Button/Button";
import UserDataForm from "components/UserDataForm/UserDataForm";
import { useFavorites } from "components/Products/Products";
import {
  ProductCard,
  ProductText,
  ProductTitle,
} from "components/Products/styles";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Input from "components/Input/Input";

export default function UserPage() {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [addedProducts, setAddedProducts] = useState<{ name: string, quantity: number }[]>([]);
  const { favorites, removeFromFavorites } = useFavorites();

  const location = useLocation();
  const email = location.state?.email;
  console.log(email);


    async function fetchUser() {
      try {
        const response = await axios.get(`/api/users/profile?email=${email}`);
        setUser(response.data);
        //console.log(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
  }

  useEffect(() => {
     fetchUser();
  }, []);

  const toggleFormVisibility = () => {
    setIsFormVisible((prev) => !prev);
  };

  const quantityChange = (productName: string, value: string) => {
    const quantity = parseFloat(value);
    if (!isNaN(quantity)) {
      setQuantities((prev) => ({
        ...prev,
        [productName]: quantity,
      }));
    }
  };

  const addMenuProduct = (productName: string) => {
    const quantity = quantities[productName];
    if (quantity && quantity > 0) {
      setAddedProducts((prev) => {
        const existingProduct = prev.find((product) => product.name === productName);
        if (existingProduct) {
          return prev.map((product) =>
            product.name === productName
              ? { ...product, quantity: product.quantity + quantity }
              : product
          );
        } else {
          return [...prev, { name: productName, quantity }];
        }
      });
      setQuantities((prev) => ({
        ...prev,
        [productName]: 0,
      }));
    }
  };

  return (
    <UserPageContainer>
      <UserInfoContainer>
        <UserInfoWrapper>
          <FontAwesomeIcon icon={faFaceGrinBeam} size="4x" />
          {user && <UserName>Welcome, {user.username}</UserName>}
          
        </UserInfoWrapper>
        <UserName>Enter your current data</UserName>
        <FormWrapper isVisible={isFormVisible}>
          <UserDataForm />
        </FormWrapper>
        <Button onButtonClick={toggleFormVisibility}>
          <FontAwesomeIcon icon={isFormVisible ? faChevronUp : faChevronDown} />
        </Button>
      </UserInfoContainer>

      <FavoriteInfoContainer>
      <UserMenuContainer>
          {addedProducts.map((product, index) => (
            <ProductTitle key={index}>
              {product.name}: {product.quantity}g
            </ProductTitle>
          ))}
        </UserMenuContainer>

        <UserFavoriteContainer>
          {favorites.map((food, index) => (
            <ProductCard
              key={index}
              style={{ width: "170px", position: "relative" }}
            >
              <RemoveButtonWrapper>
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => removeFromFavorites(food.name)}
                  style={{ color: "green"}}
                />
              </RemoveButtonWrapper>
              <ProductTitle>{food.name}</ProductTitle>
              <ProductText>{food.calories} kcal</ProductText>
              <ProductText>Fat: {food.fat}</ProductText>
              <InputButtonWrapper>
              <Input name={`quantity-${food.name}`} placeholder="Enter quantity" label="Quantity / 100g" type="number" value={quantities[food.name] || ''}  onInputChange={(e) => quantityChange(food.name, e.target.value)}/>
              <Button onButtonClick={() => addMenuProduct(food.name)}>
                <FontAwesomeIcon icon={faCheck} />
              </Button>
              </InputButtonWrapper>
            </ProductCard>
          ))}
        </UserFavoriteContainer>
      </FavoriteInfoContainer>
    </UserPageContainer>
  );
}
