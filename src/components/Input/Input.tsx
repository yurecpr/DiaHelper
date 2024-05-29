import { InputComponent, LabelElement, InputElement, ErrorMessage } from "./styles";
import { InputProps } from "./types";

function Input({
  name,
  type,
  placeholder,
  label,
  onInputChange,
  value,
  error, 
}: InputProps) {
  return (
    <InputComponent>
      <LabelElement>{label}</LabelElement>
      <InputElement
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onInputChange}
        value={value}
      ></InputElement>
      <ErrorMessage>{error}</ErrorMessage>
    </InputComponent>
  );
}

export default Input;
