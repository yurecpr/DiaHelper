import styled from "@emotion/styled";

export const HomeContainer = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: end;
  justify-content: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 33, 77, 0.8);
  border-radius: 20px;
  padding: 30px;
  margin: 10px;
`;

export const TextContent = styled.p`
  font-size: 24px;
  color: white;
`;
export const ButtonsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;
