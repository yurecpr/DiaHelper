import styled from "@emotion/styled";

export const LoginFormComponent = styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 590px;
    padding: 30px;
    margin: 20px auto;
    border: 1px solid #000000;
    border-radius: 4px;
`;

export const LoginFormTitle = styled.h2`
font-size: 24px;
`;

export const InputContainer = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
`;


export const ErrorMessage = styled.p`
color: red;
font-size: 12px;
`
