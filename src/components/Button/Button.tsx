import {StyledButton} from './styles';
import { ButtonProps } from './types'

function Button({ name, type = "button", disabled = false, onButtonClick }: ButtonProps) {
  return (
      <StyledButton disabled={disabled} onClick={onButtonClick}>{name}</StyledButton>
  );
}

export default Button;