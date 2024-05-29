import styled from "@emotion/styled";


interface StyledButtonProps {
  disabled?: boolean
}

export const StyledButton = styled.button<StyledButtonProps>`
    outline: none;
    border: none;
    border-radius: 20px;
    padding: 12px 20px;
    background-image: ${({ disabled }) => disabled ? '#E0D5CF' : 'linear-gradient(90deg, #0367a6 0%, #008997 74%)'};
    color: white;
    font-size: 16px;
    cursor: pointer;
`;

