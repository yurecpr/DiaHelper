import { ErrorMessage, InputContainer, InputsContainer, UserDataFormComponent, UserDataFormTitle } from "./styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import UserValues, { USER_DATA_FORM_FIELD_NAMES } from "types/User";

 function UserDataForm() {
  const shema = Yup.object().shape({
    [USER_DATA_FORM_FIELD_NAMES.GLUCOSE_LEVEL]: Yup.number()
    .typeError("Glucose level must be number")
      .required("Filed is required"),
    [USER_DATA_FORM_FIELD_NAMES.AGE]: Yup.number()
    .typeError("Age must be number")
      .required("Filed is required"),
    [USER_DATA_FORM_FIELD_NAMES.WEIGHT]: Yup.number()
    .typeError("Weight must be number")
      .required("Filed is required"),
    [USER_DATA_FORM_FIELD_NAMES.HEIGHT]: Yup.number()
    .typeError("Height must be number")
      .required("Filed is required"),
    
  });
  const formik = useFormik({
    initialValues: {
        [USER_DATA_FORM_FIELD_NAMES.GLUCOSE_LEVEL]: 0,
        [USER_DATA_FORM_FIELD_NAMES.AGE]: 0,
        [USER_DATA_FORM_FIELD_NAMES.WEIGHT]: 0,
        [USER_DATA_FORM_FIELD_NAMES.HEIGHT]: 0,
        
    }  as UserValues,
    validationSchema: shema,
    validateOnChange: false,
    validateOnMount: false,
    onSubmit: (values: UserValues) => {
      console.log(values);
    },
  });

  return (
    <UserDataFormComponent onSubmit={formik.handleSubmit}>
      <UserDataFormTitle>User Form</UserDataFormTitle>
      <InputsContainer>
      <InputContainer>
      <Input
          name={USER_DATA_FORM_FIELD_NAMES.GLUCOSE_LEVEL}
          placeholder="Enter glucose value"
          label="Glucose value"
          onInputChange={formik.handleChange}
          value={formik.values[USER_DATA_FORM_FIELD_NAMES.GLUCOSE_LEVEL]}/>
        <ErrorMessage>{formik.errors[USER_DATA_FORM_FIELD_NAMES.GLUCOSE_LEVEL]}</ErrorMessage>
      </InputContainer>
      <InputContainer>
      <Input
          name={ USER_DATA_FORM_FIELD_NAMES.AGE}
          placeholder="Enter your age"
          label="Age"
          onInputChange={formik.handleChange}
          value={formik.values[USER_DATA_FORM_FIELD_NAMES.AGE]}/>
        <ErrorMessage>{formik.errors[USER_DATA_FORM_FIELD_NAMES.AGE]}</ErrorMessage>
      </InputContainer>
      </InputsContainer>
      <InputsContainer>
      <InputContainer>
      <Input
          name={ USER_DATA_FORM_FIELD_NAMES.WEIGHT}
          placeholder="Enter your weight"
          label="Weight"
          onInputChange={formik.handleChange}
          value={formik.values[USER_DATA_FORM_FIELD_NAMES.WEIGHT]}/>
        <ErrorMessage>{formik.errors[USER_DATA_FORM_FIELD_NAMES.WEIGHT]}</ErrorMessage>
      </InputContainer>
      <InputContainer>
      <Input
          name={ USER_DATA_FORM_FIELD_NAMES.HEIGHT}
          placeholder="Enter your height"
          label="Height"
          onInputChange={formik.handleChange}
          value={formik.values[USER_DATA_FORM_FIELD_NAMES.HEIGHT]}/>
        <ErrorMessage>{formik.errors[USER_DATA_FORM_FIELD_NAMES.HEIGHT]}</ErrorMessage>
      </InputContainer>
      </InputsContainer>
      <Button type="button" name="Save Data" />
    </UserDataFormComponent>
  )
}
export default UserDataForm;