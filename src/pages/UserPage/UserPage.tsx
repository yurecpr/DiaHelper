import { useEffect, useState } from "react";
import User from 'types/User';
import { FavoriteInfoContainer, UserFavoriteContainer, UserInfoContainer, UserInfoWrapper, UserMenuContainer, UserName, UserPageContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrinBeam } from "@fortawesome/free-solid-svg-icons";
import Button from "components/Button/Button";
import UserDataForm from "components/UserDataForm/UserDataForm";

export default function UserPage() {
  const [user, setUser] = useState<User | undefined>(undefined);

  async function fetchUser(id: number) {
    const res = await fetch(`/api/users?id=${id}`);
    const data = await res.json();
    setUser(data);
  }

  useEffect(() => {
    fetchUser(1);
  }, []);

  return (
    <UserPageContainer>
      <UserInfoContainer>
        <UserInfoWrapper>
          <FontAwesomeIcon icon={faFaceGrinBeam} size="4x"/>
          <UserName>{user?.name}</UserName>
        </UserInfoWrapper>
      <Button name="&#8744;"/>
      <UserDataForm/>
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
