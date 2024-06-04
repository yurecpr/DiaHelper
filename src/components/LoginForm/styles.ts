import styled from "@emotion/styled";

export const LoginFormComponent = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px;
    border: 1px solid #000000;
    border-radius: 4px;
    background-color: #e6eaf1;
    min-width: 30%;
`;

export const LoginFormTitle = styled.h2`
font-size: 24px;
`;

export const InputContainer = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
`;


export const ErrorMessage = styled.p`
color: red;
font-size: 12px;
`;

export const ForgotPasswordLink = styled.a`
  cursor: pointer;
  color: blue;
  &:hover {
    color: darkblue;
  }
  `
