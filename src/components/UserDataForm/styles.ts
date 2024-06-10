import styled from "@emotion/styled";

export const UserDataFormComponent = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px;
    border: 1px solid #000000;
    border-radius: 4px;
    background-color: #e6eaf1;
   
`;

export const UserDataFormTitle = styled.h2`
font-size: 24px;
color: black;
`;

export const InputsContainer = styled.div`
display: flex;
flex-wrap: wrap;
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