import {StyledButton} from './styles';
import { ButtonProps } from './types'

function Button({ name, type = "button", disabled = false, onButtonClick, children }: ButtonProps) {
  return (
      <StyledButton disabled={disabled} onClick={onButtonClick}>{name || children}</StyledButton>
  );
}

export default Button;