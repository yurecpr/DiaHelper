import styled from "@emotion/styled";

export const ProductsContainer = styled.div`
  display: flex;
  flex: 1;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  z-index: 2;
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

export const ButtonWrapper = styled.div``;

export const ProductsCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  padding: 20px;
  border: 2px solid #037353;
  border-radius: 20px;
  background: linear-gradient(to bottom, #ffffff 0%, #669cac 100%);
  color: white;
  margin: 15px;
  width: 230px;
`;
export const ProductTitle = styled.h3`
  width: 100%;
  border-radius: 20px;
  padding: 7px;
  text-align: center;
  background-color: rgba(102, 102, 102, 0.5);
  color: white;
`;
export const ProductImage = styled.img`
  width: 150px;
  border-radius: 10px;
`;
export const ProductText = styled.p`
  font-size: 19px;
`;
