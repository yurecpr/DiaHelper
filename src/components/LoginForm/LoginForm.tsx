import Input from "components/Input/Input";
import Button from "components/Button/Button";
import {
  ErrorMessage,
  ForgotPasswordLink,
  InputContainer,
  LoginFormComponent,
  LoginFormTitle,
} from "./styles";
import { useFormik } from "formik";
import { LoginFormValues, LOGIN_FIELD_NAMES } from "./types";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LoginForm() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // Додано стан для зберігання повідомлення про помилку

  
  const shema = Yup.object().shape({
    [LOGIN_FIELD_NAMES.EMAIL]: Yup.string()
      .required("Field email is required")
      .email("Failed type email"),
    [LOGIN_FIELD_NAMES.PASSWORD]: Yup.string()
      .required("Field password is required")
  });

  const formik = useFormik({
    initialValues: {
      [LOGIN_FIELD_NAMES.EMAIL]: "",
      [LOGIN_FIELD_NAMES.PASSWORD]: "",
    } as LoginFormValues,
    validationSchema: shema,
    validateOnChange: false,
    validateOnMount: false,
    onSubmit: (values: LoginFormValues) => {
      axios.post("/api/auth/login", values).then(() => {
        setErrorMessage(null);
          navigate("/user", { state: { email: values.email } });
         }).catch(error => {
          setErrorMessage("Invalid email or password");
           console.error("Login failed", error);
         });
      // console.log(values);
      
    },
  });

  const resetPassword = () => {
    axios.put("api/auth/update", { email: formik.values[LOGIN_FIELD_NAMES.EMAIL] })
      .then(() => {
        alert("Password reset, email sent!");
      })
      .catch(error => {
        console.error("Failed to send password reset email", error);
      });
  };

  return (
    <LoginFormComponent onSubmit={formik.handleSubmit}>
      <LoginFormTitle>Login</LoginFormTitle>
      <InputContainer>
        <Input
          name={LOGIN_FIELD_NAMES.EMAIL}
          placeholder="Enter your email"
          label="Email"
          onInputChange={formik.handleChange}
          value={formik.values[LOGIN_FIELD_NAMES.EMAIL]}
        />
        <ErrorMessage>{formik.errors[LOGIN_FIELD_NAMES.EMAIL]}</ErrorMessage>
      </InputContainer>
      <InputContainer>
        <Input
          name={LOGIN_FIELD_NAMES.PASSWORD}
          type="password"
          placeholder="Enter your password from email"
          label="Password"
          onInputChange={formik.handleChange}
          value={formik.values[LOGIN_FIELD_NAMES.PASSWORD]}
        />
        <ErrorMessage>{formik.errors[LOGIN_FIELD_NAMES.PASSWORD]}</ErrorMessage>
      </InputContainer>
      <Button type="submit" name="Login" />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <ForgotPasswordLink onClick={resetPassword}>
        Forgot Password?
      </ForgotPasswordLink>
    </LoginFormComponent>
  );
}

export default LoginForm;
