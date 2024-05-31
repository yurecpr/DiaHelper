import { ErrorMessage, InputContainer, InputsContainer, SignUpComponent, SignUpTitle } from "./styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { SIGN_UP_FIELD_NAMES, SignUpValues } from "./types";
import Input from "components/Input/Input";
import Button from "components/Button/Button";

 function SignUpForm() {
  const shema = Yup.object().shape({
    [SIGN_UP_FIELD_NAMES.FIRST_NAME]: Yup.string()
      .required("Filed first name is required"),
    [SIGN_UP_FIELD_NAMES.SECOND_NAME]: Yup.string()
      .required("Filed second name is required"),
    [SIGN_UP_FIELD_NAMES.EMAIL]: Yup.string()
      .required("Filed email is required")
      .email("Filed type email"),
    [SIGN_UP_FIELD_NAMES.PASSWORD]: Yup.string()
      .required("Filed password is required"),
    [SIGN_UP_FIELD_NAMES.CONFIRM_PASSWORD]: Yup.string()
      .required("Filed is required"),
      
  });
  const formik = useFormik({
    initialValues: {
      [SIGN_UP_FIELD_NAMES.FIRST_NAME]: "",
      [SIGN_UP_FIELD_NAMES.SECOND_NAME]: "",
      [SIGN_UP_FIELD_NAMES.EMAIL]: "",
      [SIGN_UP_FIELD_NAMES.PASSWORD]: "",
      [SIGN_UP_FIELD_NAMES.CONFIRM_PASSWORD]: "",

    } as SignUpValues,
    validationSchema: shema,
    validateOnChange: false,
    validateOnMount: false,
    onSubmit: (values: SignUpValues) => {
      console.log(values);
    },
  });




  return (
    <SignUpComponent onSubmit={formik.handleSubmit}>
      <SignUpTitle>Sign Up Form</SignUpTitle>
      <InputsContainer>
      <InputContainer>
      <Input
          name={ SIGN_UP_FIELD_NAMES.FIRST_NAME}
          placeholder="Enter your first name"
          label="First name"
          onInputChange={formik.handleChange}
          value={formik.values[SIGN_UP_FIELD_NAMES.FIRST_NAME]}/>
        <ErrorMessage>{formik.errors[SIGN_UP_FIELD_NAMES.FIRST_NAME]}</ErrorMessage>
      </InputContainer>
      <InputContainer>
      <Input
          name={ SIGN_UP_FIELD_NAMES.SECOND_NAME}
          placeholder="Enter your second name"
          label="Second name"
          onInputChange={formik.handleChange}
          value={formik.values[SIGN_UP_FIELD_NAMES.SECOND_NAME]}/>
        <ErrorMessage>{formik.errors[SIGN_UP_FIELD_NAMES.SECOND_NAME]}</ErrorMessage>
      </InputContainer>
      </InputsContainer>

      <InputContainer>
      <Input
          name={ SIGN_UP_FIELD_NAMES.EMAIL}
          placeholder="Enter your email"
          label="Email"
          onInputChange={formik.handleChange}
          value={formik.values[SIGN_UP_FIELD_NAMES.EMAIL]}/>
        <ErrorMessage>{formik.errors[SIGN_UP_FIELD_NAMES.EMAIL]}</ErrorMessage>
      </InputContainer>
      <InputContainer>
      <Input
          name={ SIGN_UP_FIELD_NAMES.PASSWORD}
          placeholder="Enter password"
          label="Password"
          onInputChange={formik.handleChange}
          value={formik.values[SIGN_UP_FIELD_NAMES.PASSWORD]}/>
        <ErrorMessage>{formik.errors[SIGN_UP_FIELD_NAMES.PASSWORD]}</ErrorMessage>
      </InputContainer>
      <InputContainer>
      <Input
          name={ SIGN_UP_FIELD_NAMES.CONFIRM_PASSWORD}
          placeholder="Confirm password"
          label="Confirm password"
          onInputChange={formik.handleChange}
          value={formik.values[SIGN_UP_FIELD_NAMES.CONFIRM_PASSWORD]}/>
        <ErrorMessage>{formik.errors[SIGN_UP_FIELD_NAMES.CONFIRM_PASSWORD]}</ErrorMessage>
      </InputContainer>
      <Button type="submit" name="Sign Up" />
    </SignUpComponent>
  )
}
export default SignUpForm;