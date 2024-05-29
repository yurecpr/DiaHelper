import { InputComponent, LabelElement, InputElement } from "./styles";
import { InputProps } from "./types";

function Input({
  name,
  type,
  placeholder,
  label,
  onInputChange,
  value, 
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
    </InputComponent>
  );
}

export default Input;
