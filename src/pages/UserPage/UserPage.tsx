import { useEffect, useState } from "react";
import User from 'types/User';
import { FavoriteInfoContainer, FormWrapper, UserFavoriteContainer, UserInfoContainer, UserInfoWrapper, UserMenuContainer, UserName, UserPageContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faFaceGrinBeam, faUtensils } from "@fortawesome/free-solid-svg-icons";
import Button from "components/Button/Button";
import UserDataForm from "components/UserDataForm/UserDataForm";
import { useFavorites } from "components/Products/Products";
import { ProductCard, ProductImage, ProductText, ProductTitle } from "components/Products/styles";


export default function UserPage() {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const { favorites } = useFavorites();

  async function fetchUser(id: number) {
    const res = await fetch(`/api/users?id=${id}`);
    const data = await res.json();
    setUser(data);
  }

  useEffect(() => {
    fetchUser(1);
  }, []);

  const toggleFormVisibility = () => {
    setIsFormVisible((prev) => !prev);
  };


  return (
    <UserPageContainer>
      <UserInfoContainer>
        <UserInfoWrapper>
          <FontAwesomeIcon icon={faFaceGrinBeam} size="4x"/>
          <UserName>{user?.name}</UserName>
        </UserInfoWrapper>
      <FormWrapper isVisible={isFormVisible}>
        <UserDataForm />
      </FormWrapper>
      <Button onButtonClick={toggleFormVisibility}>
        <FontAwesomeIcon icon={isFormVisible ? faChevronUp : faChevronDown} />
      </Button>
      </UserInfoContainer>
      
      <FavoriteInfoContainer> 
        <UserFavoriteContainer>
        {favorites.map((food, index) => (
            <ProductCard key={index}>
              <ProductTitle>{food.name}</ProductTitle>
              {food.image ? (
                <ProductImage src={food.image} alt={food.name} />
              ) : (
                <FontAwesomeIcon icon={faUtensils} size="5x" />
              )}
              <ProductText>Calories: {food.calories}</ProductText>
              <ProductText>Fat: {food.fat}</ProductText>
            </ProductCard>
          ))}
        </UserFavoriteContainer>
        <UserMenuContainer></UserMenuContainer>
       
      </FavoriteInfoContainer>
      
    </UserPageContainer>
  );
}
