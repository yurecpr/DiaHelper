import styled from "@emotion/styled";

const randomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const ProductsContainer = styled.div`
display: flex;
  flex: 1;
  
  flex-direction: column;
  align-items: center;
`;

export const ProductsForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  gap: 60px;
  margin-top: 40px;
`;

export const InputButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 12px;
`;

export const ButtonWrapper = styled.div`
  
`;

export const ProductsCardsWrapper = styled.div`
display: flex;
flex-wrap:wrap;
gap: 10px;
`;

export const ProductCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
padding: 15px;
border: 2px solid #037353;
border-radius: 20px;
background-color: ${randomColor};
margin-top: 10px;


`
export const ProductTitle = styled.h3`
width: 100%;
border-radius: 20px;
padding: 7px;
text-align: center;
background-color: #666666;
color: white;

`
export const ProductImage = styled.img`
width: 150px;
border-radius: 10px;
`
export const ProductText = styled.p`
font-size: 19px;

`