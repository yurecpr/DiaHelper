import { useEffect, useState } from "react";
import User from 'types/User';
import { FavoriteInfoContainer, FormWrapper, UserFavoriteContainer, UserInfoContainer, UserInfoWrapper, UserMenuContainer, UserName, UserPageContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faFaceGrinBeam } from "@fortawesome/free-solid-svg-icons";
import Button from "components/Button/Button";
import UserDataForm from "components/UserDataForm/UserDataForm";

export default function UserPage() {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);

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
      <Button onButtonClick={toggleFormVisibility}><FontAwesomeIcon icon={isFormVisible ? faChevronUp : faChevronDown} /></Button>
      <FormWrapper isVisible={isFormVisible}>
        <UserDataForm />
      </FormWrapper>
      </UserInfoContainer>
      
      <FavoriteInfoContainer>
        <UserMenuContainer></UserMenuContainer>
        <UserFavoriteContainer></UserFavoriteContainer>
      </FavoriteInfoContainer>
      




      {/* <h1>User page example</h1>
      <p>{user?.email}</p> */}
    </UserPageContainer>
  );
}
