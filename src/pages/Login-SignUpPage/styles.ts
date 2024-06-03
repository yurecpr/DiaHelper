import styled from "@emotion/styled";

export const LoginSignUpContainer = styled.div`
display: flex;
flex-wrap: wrap;
z-index: 0;
position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: -1; 
    width: 100%;
    opacity: 2;
    background-color: rgba(215, 213, 213, 0.53);
  }
`;