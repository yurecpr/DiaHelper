import styled from "@emotion/styled";

interface isVisibleFormProps {
    isVisibleForm: boolean,
    }
    

export const LoginSignUpContainer = styled.div`
display: block;
margin: 10px auto;
position: relative;
z-index: 2;

`;

export const LoginFormContainer = styled.div<isVisibleFormProps>`
overflow: hidden;
backface-visibility: hidden;
  outline: 1px solid black;
  border-radius: 2%;
  transition: transform 0.6s linear;
  width: 100%;
  transform: ${({ isVisibleForm }) => (isVisibleForm ? "perspective(600px) rotateY(-180deg)" : "perspective(600px) rotateY(0deg)")};
 
`


export const SignUpFormContainer = styled.div<isVisibleFormProps>`
overflow: hidden;
width: 100%;
backface-visibility: hidden;
  outline: 1px solid black;
  border-radius: 2%;
  transition: transform 0.6s linear;
  position: absolute;
  top: 15%;
  left: 0;
  transform: ${({ isVisibleForm }) => (isVisibleForm ? "perspective(600px) rotateY(0deg)" : "perspective(600px) rotateY(180deg)")};

/* top:  */

`
export const ButtonWrapper = styled.div`
margin-bottom: 20px;

`