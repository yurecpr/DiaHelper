import styled from "@emotion/styled";

interface isVisibleProps {
isVisible: boolean,
}

export const UserPageContainer  = styled.div`
display: flex;
flex-wrap: wrap;
gap: 20px;
flex-direction: column;
align-items: center;
padding: 20px;

`;
export const UserInfoContainer  = styled.div`
display: flex;
flex-direction: column;
align-items: center;
overflow: hidden;
padding: 15px;
gap: 10px;
color: white;
background-color: rgba(0, 33, 77, 0.63);
border-radius: 100px 100px 0 0;
`;

export const UserInfoWrapper  = styled.div`
display: flex;
align-items: center;
gap: 30px;

`
export const UserName  = styled.h3`
font-size: 22px;
`;
export const FormWrapper = styled.div<isVisibleProps>`
  max-height: ${({ isVisible }) => (isVisible ? "500px" : "0")};
  overflow: hidden;
  transition:  0.8s ease-in-out;
 
`;

export const FavoriteInfoContainer  = styled.div`
display: flex;
width: 100%;
gap: 15px;
justify-content: space-around;

`;

export const RemoveButtonWrapper  = styled.div`
position: absolute;
top: 10px;
right: 10px;
`

export const UserMenuContainer  = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
background-color: rgba(0, 33, 77, 0.73);
width: 50%;
`;

export const UserFavoriteContainer  = styled.div`
width: 50%;
display: flex;
flex-wrap: wrap;
justify-content: center;
background-color: rgba(0, 33, 77, 0.5);

`;

export const InputButtonWrapper  = styled.div`
display:  flex;
align-items: flex-end;
width: 66%;
justify-content: center;
`
