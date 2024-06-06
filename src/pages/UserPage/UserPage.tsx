import { useEffect, useState } from "react";
import User from "types/User";
import {
  FavoriteInfoContainer,
  FormWrapper,
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
  faChevronDown,
  faChevronUp,
  faFaceGrinBeam,
  faTrash,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import Button from "components/Button/Button";
import UserDataForm from "components/UserDataForm/UserDataForm";
import { useFavorites } from "components/Products/Products";
import {
  ProductCard,
  ProductText,
  ProductTitle,
} from "components/Products/styles";

export default function UserPage() {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const { favorites, removeFromFavorites } = useFavorites();

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
          <FontAwesomeIcon icon={faFaceGrinBeam} size="4x" />
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
        <UserMenuContainer></UserMenuContainer>

        <UserFavoriteContainer>
          {favorites.map((food, index) => (
            <ProductCard
              key={index}
              style={{ width: "170px", position: "relative" }}
            >
              <RemoveButtonWrapper>
                <FontAwesomeIcon
                  icon={faX}
                  onClick={() => removeFromFavorites(food.name)}
                  style={{ color: "green"}}
                />
              </RemoveButtonWrapper>
              <ProductTitle>{food.name}</ProductTitle>
              <ProductText>{food.calories} kcal</ProductText>
              <ProductText>Fat: {food.fat}</ProductText>
            </ProductCard>
          ))}
        </UserFavoriteContainer>
      </FavoriteInfoContainer>
    </UserPageContainer>
  );
}
