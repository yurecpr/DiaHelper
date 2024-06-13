import { ErrorMessage, InputContainer, SignUpComponent, SignUpTitle, SuccessMessage } from "./styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { SIGN_UP_FIELD_NAMES, SignUpValues } from "./types";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { useState } from "react";
import axios from "axios";

 function SignUpForm() {
  const [successMessage, setSuccessMessage] = useState<string>("");

  const shema = Yup.object().shape({
    [SIGN_UP_FIELD_NAMES.USER_NAME]: Yup.string()
      .required("Filed name is required")
      .matches(/^[^\d]*$/, "Wrong type of name"),
    [SIGN_UP_FIELD_NAMES.EMAIL]: Yup.string()
      .required("Filed email is required")
      .email("Failed type email"),
    
  });
  const formik = useFormik({
    initialValues: {
      [SIGN_UP_FIELD_NAMES.USER_NAME]: "",
      [SIGN_UP_FIELD_NAMES.EMAIL]: "",

    } as SignUpValues,
    validationSchema: shema,
    validateOnChange: false,
    validateOnMount: false,
    onSubmit: (values: SignUpValues) => {
      axios.post("/api/register", values);
      setSuccessMessage("We sent the password to your email address");
    },
  });

  return (
    <SignUpComponent onSubmit={formik.handleSubmit}>
      <SignUpTitle>Sign Up</SignUpTitle>

      <InputContainer>
      <Input
          name={ SIGN_UP_FIELD_NAMES.USER_NAME}
          placeholder="Enter your name"
          label="Name"
          onInputChange={formik.handleChange}
          value={formik.values[SIGN_UP_FIELD_NAMES.USER_NAME]}/>
        <ErrorMessage>{formik.errors[SIGN_UP_FIELD_NAMES.USER_NAME]}</ErrorMessage>
      </InputContainer>

      <InputContainer>
      <Input
          name={ SIGN_UP_FIELD_NAMES.EMAIL}
          placeholder="Enter your email"
          label="Email"
          onInputChange={formik.handleChange}
          value={formik.values[SIGN_UP_FIELD_NAMES.EMAIL]}/>
        <ErrorMessage>{formik.errors[SIGN_UP_FIELD_NAMES.EMAIL]}</ErrorMessage>
      </InputContainer>
      
      <Button type="submit" name="Sign Up" />
      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
    </SignUpComponent>
  )
}
export default SignUpForm;