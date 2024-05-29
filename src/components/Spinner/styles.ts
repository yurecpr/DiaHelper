import styled from "@emotion/styled";


export const SpinnerElement = styled.div`
    width:200px;
    height:4px;
    background:linear-gradient(to right,green,green);
    background-color:#ccc;
    border-radius:4px;
    background-size:20%;
    background-repeat:repeat-y;
    background-position:-25% 0;
    animation:scroll 1.2s ease-in-out infinite;
  
  @keyframes scroll{
    50%{background-size:80%}
    100%{background-position:125% 0;}
  }
`;

