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

function LoginForm() {
  const shema = Yup.object().shape({
    [LOGIN_FIELD_NAMES.EMAIL]: Yup.string()
      .required("Filed email is required")
      .email("Filed type email"),
    [LOGIN_FIELD_NAMES.PASSWORD]: Yup.string()
      .required("Filed password is required")
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
      console.log(values);
    },
  });

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
          type="text"
          placeholder="Enter your password"
          label="Password"
          onInputChange={formik.handleChange}
          value={formik.values[LOGIN_FIELD_NAMES.PASSWORD]}
        />
        <ErrorMessage>{formik.errors[LOGIN_FIELD_NAMES.PASSWORD]}</ErrorMessage>
      </InputContainer>
      <Button type="submit" name="Login" />
      <ForgotPasswordLink >
        Forgot Password?
      </ForgotPasswordLink>
    </LoginFormComponent>
  );
}

export default LoginForm;
