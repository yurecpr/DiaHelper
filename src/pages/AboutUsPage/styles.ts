import styled from "@emotion/styled";

export const AboutUsContainer = styled.div`
  display: flex;
  flex: 1;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  z-index: 2;
`;
export const AboutUsTitle = styled.h2`
  font-size: 30px;
  color: white;
`;
export const AboutUsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  align-items: center;
  gap: 20px;
`;
export const DeveloperCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 10px;
  /* border: 1px solid #ccc; */
  border-radius: 5px;
  width: auto;
  text-align: center;
  background-color:#394BBC;
`;
export const DeveloperInfoContainer = styled.div`
  display: flex;
`;
export const DeveloperInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DeveloperName = styled.h3``;

export const DeveloperImg = styled.img`
  width: 200px; 
  height: 200px; 
  border-radius: 50%; 
  object-fit: cover; 
  margin-bottom: 10px; 
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 15px;
`;
