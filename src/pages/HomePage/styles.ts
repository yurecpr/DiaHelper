import styled from "@emotion/styled";

export const HomeContainer = styled.div`
 padding: 40px;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: end;
  @media (max-width: 600px) {
   padding: 10px;
  }
  
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 60%;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 33, 77, 0.8);
  border-radius: 20px;
  padding: 30px;
  margin: 10px;
  @media (max-width: 600px) {
    font-size: 18px;
    width: 90%;
  }
`;

export const TextContent = styled.p`
  font-size: 24px;
  color: white;
`;
export const ButtonsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`;
