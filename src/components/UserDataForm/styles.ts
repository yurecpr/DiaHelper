import styled from "@emotion/styled";

export const UserDataFormComponent = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 590px;
    padding: 30px;
    margin: 20px auto;
    border: 1px solid #000000;
    border-radius: 4px;
    background-color: #e6eaf1;
    min-width: 400px;
`;

export const UserDataFormTitle = styled.h2`
font-size: 24px;
`;

export const InputsContainer = styled.div`
display: flex;
gap: 15px;

`

export const InputContainer = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
`;


export const ErrorMessage = styled.p`
color: red;
font-size: 12px;
`