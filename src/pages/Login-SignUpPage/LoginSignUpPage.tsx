import LoginForm from "components/LoginForm/LoginForm";
import SignUpForm from "components/SignUpForm/SignUpForm";
import {
    ButtonWrapper,
  LoginFormContainer,
  LoginSignUpContainer,
  SignUpFormContainer,
} from "./styles";
import Button from "components/Button/Button";
import { useState } from "react";


function LoginSignUpPage() {
    const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
    const toggleFormVisibility = () => {
        setIsFormVisible((prev) => !prev);
      };
  return (
    <LoginSignUpContainer>
      <ButtonWrapper><Button name="Sign Up Form" onButtonClick={toggleFormVisibility}></Button></ButtonWrapper>
      
      <LoginFormContainer isVisibleForm={isFormVisible}>
        <LoginForm />
      </LoginFormContainer>
      <SignUpFormContainer isVisibleForm={isFormVisible}>
        <SignUpForm />
      </SignUpFormContainer>
      
    </LoginSignUpContainer>
  );
}

export default LoginSignUpPage;
