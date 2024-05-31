import LoginForm from "components/LoginForm/LoginForm";
import SignUpForm from "components/SignUpForm/SignUpForm";
import { LoginSignUpContainer } from "./styles";

function LoginSignUpPage() {
    return (
        <LoginSignUpContainer>
            <LoginForm/>
            <SignUpForm/>
        </LoginSignUpContainer>
    )
}

export default LoginSignUpPage;