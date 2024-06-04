import styled from "@emotion/styled";

interface isVisibleProps {
isVisible: boolean,
}

export const UserPageContainer  = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
align-items: center;
padding: 20px;

`;
export const UserInfoContainer  = styled.div`
display: flex;
flex-direction: column;
align-items: center;

padding: 15px;
width: 100%;
gap: 20px;
color: white;
background-color: rgba(0, 33, 77, 0.5);
`;
export const UserInfoWrapper  = styled.div`
display: flex;
align-items: center;
gap: 30px;

`
export const UserName  = styled.h3`
font-size: 20px;
`;
export const FormWrapper = styled.div<isVisibleProps>`
  max-height: ${({ isVisible }) => (isVisible ? "500px" : "0")};
  overflow: hidden;
  transition:  0.8s ease-in-out;
 
`;



export const FavoriteInfoContainer  = styled.div`

`;

export const UserMenuContainer  = styled.div`

`;

export const UserFavoriteContainer  = styled.div`

`;

