import { useEffect, useRef, useState } from "react";
import User from "types/User";
import {
  CircularProgress,
  FavoriteInfoContainer,
  FormWrapper,
  InputButtonWrapper,
  ProductListWrapper,
  ProgressValue,
  RemoveButtonWrapper,
  UserCalculateContainer,
  UserFavoriteContainer,
  UserInfoContainer,
  UserInfoWrapper,
  UserMenuContainer,
  UserMenuList,
  UserName,
  UserPageContainer,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faChevronDown,
  faChevronUp,
  faFaceGrinBeam,
  faSignOutAlt,
  faTrash,

} from "@fortawesome/free-solid-svg-icons";
import Button from "components/Button/Button";
import UserDataForm from "components/UserDataForm/UserDataForm";

import {
  ProductCard,
  ProductText,
  ProductTitle,
} from "components/Products/styles";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "components/Input/Input";
import {  TextContent } from "pages/HomePage/styles";


export default function UserPage() {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<any[]>([]);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [addedProducts, setAddedProducts] = useState<{ name: string, quantity: number }[]>([]);
  const [maxCalories, setMaxCalories] = useState<number | undefined>(undefined);

  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;
  //console.log(email);

  useEffect(() => {
    fetchUser();
    fetchFavoriteList()
    loadAddedProductsFromLocalStorage();
 }, []);

  async function fetchUser() {
      try {
        const response = await axios.get(`/api/users/profile?email=${email}`);
        const userData = response.data;
       setUser(userData);
       const calculatedMaxCalories = userData.weight * 25;
       setMaxCalories(calculatedMaxCalories);
       //console.log(userData.weight);
       console.log(userData);
       //console.log(calculatedMaxCalories);
  
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
  }

  async function fetchFavoriteList() {
    try {
      const response = await axios.get(`/api/users/favorites/list?email=${email}`);
      const favoriteListData = response.data;
      setFavorites(favoriteListData);
     console.log(favoriteListData);
    } catch (error) {
      console.error("Error fetching favorite data:", error);
    }
}

async function removeFromFavorites(productTitle: string, calories: number) {
  try {
    await axios.delete(`/api/users/favorites/remove`, { data: { productTitle, calories } });
    setFavorites((prevFavorites) => prevFavorites.filter((food) => food.productTitle !== productTitle));
  } catch (error) {
    console.error("Error removing from favorites:", error);
  }
}

  const loadAddedProductsFromLocalStorage = () => {
    const storedProducts = localStorage.getItem('addedProducts');
    if (storedProducts) {
      setAddedProducts(JSON.parse(storedProducts));
    }
  };
  const saveAddedProductsToLocalStorage = (products: { name: string, quantity: number }[]) => {
    localStorage.setItem('addedProducts', JSON.stringify(products));
  };

  const clearAddedProducts = () => {
    setAddedProducts([]);
    localStorage.removeItem('addedProducts');
  };


  const toggleFormVisibility = () => {
    setIsFormVisible((prev) => !prev);
  };

  const quantityChange = (productName: string, value: string) => {
    const quantity = parseInt(value);
    if (!isNaN(quantity)) {
      setQuantities((prev) => ({
        ...prev,[productName]: quantity,
      }));
    }
  };

  const addMenuProduct = (productName: string) => {
    const quantity = quantities[productName];
    if (quantity && quantity > 0) {
      setAddedProducts((prev) => {
        const updatedProducts = [...prev];
        const existingProduct = updatedProducts.find((product) => product.name === productName);
        if (existingProduct) {
          existingProduct.quantity += quantity;
        }else {
          updatedProducts.push({ name: productName, quantity });
        }
        saveAddedProductsToLocalStorage(updatedProducts);
        return updatedProducts;
      });
      setQuantities((prev) => ({
        ...prev, [productName]: 0,
      }));
    }
  };


  const removeAddedProduct = (productName: string) => {
    setAddedProducts((prev) => prev.filter((product) => product.name !== productName));
    saveAddedProductsToLocalStorage(addedProducts.filter((product) => product.name !== productName));
  };

  const calculateTotalCalories = () => {
    let totalCalories = 0;
    addedProducts.forEach((product) => {
      const food = favorites.find((item) => item.productTitle === product.name);
       console.log(food);
      if (food) {
        const calories = (food.calories * product.quantity) / 100;
        totalCalories += calories;
        console.log(totalCalories);
        
      }
    });
    return totalCalories.toFixed(2);
  };

  const logout = async () => {
    try {
      await axios.post("/api/auth/logout");
      localStorage.clear();
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  let circularProgress = useRef<HTMLDivElement>(null);
  let progressValue = useRef<HTMLSpanElement>(null);


  useEffect(() => {
    const totalCalories = parseFloat(calculateTotalCalories());
    const progressEndValue = maxCalories || 1; 
    if (circularProgress.current) {
      const progressAngle = (totalCalories / progressEndValue) * 360;
      
      if (totalCalories > progressEndValue) {
        const exceededCalories = totalCalories - progressEndValue;
        const exceededAngle = (exceededCalories / progressEndValue) * 360;
        
        console.log(exceededAngle);
        circularProgress.current.style.background = `conic-gradient(
          #F06060 0deg ${exceededAngle}deg,  
           #79D08F 0deg
        )`;
      } else {
        circularProgress.current.style.background = `conic-gradient(
          #79D08F ${progressAngle}deg, 
          #F5FFF1 ${progressAngle}deg
        )`;
      }
    }
  }, [calculateTotalCalories, maxCalories]);
  

  

 

  return (
    <UserPageContainer>
      <UserInfoContainer>
        <UserInfoWrapper>
          <FontAwesomeIcon icon={faFaceGrinBeam} size="4x" />
          {user && <UserName>Welcome, {user.username.toUpperCase()}</UserName>}
          <FontAwesomeIcon icon={faSignOutAlt} size="2x" onClick={logout} />
          
        </UserInfoWrapper>
        <UserName>Enter your current data</UserName>
        <FormWrapper isVisible={isFormVisible}>
          <UserDataForm fetchUserData={fetchUser} />
        </FormWrapper>
        <Button onButtonClick={toggleFormVisibility}>
          <FontAwesomeIcon icon={isFormVisible ? faChevronUp : faChevronDown} />
        </Button>
      </UserInfoContainer>

      <FavoriteInfoContainer>
      <UserMenuContainer>
        
        {maxCalories !== undefined && (
          <UserCalculateContainer>
              <TextContent>
                Your max calories: {maxCalories} kKal
              </TextContent>  
              <TextContent>
              Consumed calories: {calculateTotalCalories()} kKal
              </TextContent>  

            <CircularProgress ref={circularProgress}>
              
              <ProgressValue ref={progressValue}>{calculateTotalCalories()} kKal /<br/> {maxCalories} kKal</ProgressValue>
            </CircularProgress>


          </UserCalculateContainer>
        )}
      
      {addedProducts.length > 0 && (
        <UserMenuList>
          {addedProducts.map((product, index) => (
            <ProductListWrapper key={index}>
            <ProductTitle >
              {product.name}:{product.quantity}g 
            </ProductTitle>
              <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => removeAddedProduct(product.name)}
                  style={{ marginLeft: '5px', cursor: 'pointer',color:'white' }}
                />
           </ProductListWrapper>
          ))}
          <Button name="Clear List" onButtonClick={clearAddedProducts}></Button>
        </UserMenuList>
      )}

     
        </UserMenuContainer>

        <UserFavoriteContainer>
           {favorites.map((food, index) => (
            <ProductCard
              key={index}
              style={{ width: "170px", position: "relative" }}>
              <RemoveButtonWrapper>
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => removeFromFavorites(food.productTitle, food.calories)}
                  style={{ color: "green"}}/>
              </RemoveButtonWrapper>
              <ProductTitle>{food.productTitle}</ProductTitle>
              <ProductText>{food.calories} kcal / 100g</ProductText>
              
              <InputButtonWrapper>
              <Input name={`quantity-${food.productTitle}`} placeholder="Enter quantity" label="Quantity / g" type="number" value={quantities[food.productTitle] || ''}  onInputChange={(e) => quantityChange(food.productTitle, e.target.value)}/>
              <Button onButtonClick={() => addMenuProduct(food.productTitle)}>
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
