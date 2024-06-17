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
border-radius: 25px 25px 0 0;
`;

export const UserInfoWrapper  = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;
width: 100%;
gap: 10px;

`

export const UserName  = styled.h3`
font-size: 22px;
display: flex;
`;
export const FormWrapper = styled.div<isVisibleProps>`
  max-height: ${({ isVisible }) => (isVisible ? "500px" : "0")};
  overflow: hidden;
  transition:  0.8s ease-in-out;
 
`;

export const FavoriteInfoContainer  = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
gap: 15px;
justify-content: space-around;
@media (max-width: 700px) {
  
 flex-direction: column;
 align-items: center;
}
`;

export const RemoveButtonWrapper  = styled.div`
position: absolute;
top: 10px;
right: 10px;
`

export const UserMenuContainer  = styled.div`
display: flex;
flex-wrap: wrap;
gap: 20px;
@media (max-width: 700px) {
  
  justify-content: center;
}
`;

export const UserFavoriteContainer  = styled.div`
width: 48%;
display: flex;
flex-wrap: wrap;
justify-content: center;
background-color: rgba(0, 33, 77, 0.5);
border-radius: 20px;
@media (max-width: 700px) {
    width: 90%;
  }
`;

export const InputButtonWrapper  = styled.div`
display:  flex;
align-items: flex-end;
width: 66%;
justify-content: center;
`
export const UserMenuList  = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
background-color: rgba(0, 33, 77, 0.73);
padding: 20px;
border-radius: 20px;
@media (max-width: 700px) {
    width: 90%;
  }
`;

export const ProductListWrapper  = styled.div`
display: flex;
justify-content: space-around;
align-items: center;

`

export const UserCalculateContainer  = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
padding: 20px;
background-color: rgba(0, 33, 77, 0.73);
border-radius: 20px;
/* width: 48%; */
`
export const CircularProgress  = styled.div`
position: relative;
height: 250px;
width: 250px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
/* transition: all 0.7s ease 0s; */
transition-duration: 0.9s linear;

&::before{
  content: "";
  position: absolute;
  height: 180px;
  width: 180px;
  background-color: #ffff;
  border-radius: 50%;
  border: 1px solid #003B4A;
  transition-duration: 9s;
}
`
export const ProgressValue  = styled.span`
position: relative;
font-size: 26px;

`
