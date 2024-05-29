import styled from "@emotion/styled";

export const InputComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const LabelElement = styled.label`
  color: #6f6f6f;
`;

export const InputElement = styled.input`
  padding: 12px;
  border: 1px solid hsl(0, 0%, 25%, 1);
  border-radius: 4px;
  color: #1e1e1e;

  &::placeholder {
    color: #6f6f6f;
  }
`;
