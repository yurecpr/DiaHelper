
import styled from "@emotion/styled";
import { Banner, Logo } from "assets";
import { Link, NavLink } from "react-router-dom";

interface isActivBurgerProps {
  isActivBurger: boolean,
  }

export const LayoutComponent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-image: url(${Banner});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;

  
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 12px 20px;
  width: 100%;
  background-color: rgba(118, 118, 118, 0.33);
  position: sticky;
  left: 0;
  top: 0;
  
  &::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
  z-index: 2;
  }
`;

export const HeaderLogoContainer = styled(Link)`
  width: 75px;
  height: 75px;
  z-index: 3;
`;

export const HeaderLogo = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
HeaderLogo.defaultProps = { src: Logo };

export const HeaderBurger = styled.div<isActivBurgerProps>`
display: none;
@media (max-width:600px){
  z-index: 3;
display: block;
position: relative;
width: 30px;
height: 20px;
&::before, &::after{
content: "";
background-color: white;
position: absolute;
left: 0;
width: 100%;
height: 2px;
transition: all 0.3s ease 0s;
}
&::before{
  top: 0;
  background-color: ${({ isActivBurger }) => (isActivBurger ? "yellow" : "white")};
  transform: ${({isActivBurger}) => (isActivBurger ? "rotate(45deg)" : "")} ;
  top: ${({isActivBurger}) => (isActivBurger ? "9px" : "0")};
  
}
&::after{
  bottom: 0;
  background-color: ${({ isActivBurger }) => (isActivBurger ? "yellow" : "white")};
  transform: ${({isActivBurger}) => (isActivBurger ? "rotate(-45deg)" : "")} ;
  bottom: ${({isActivBurger}) => (isActivBurger ? "9px" : "0")};
  
   
 }
}


`;

export const HeaderBurgerElement = styled.span<isActivBurgerProps>`
position: absolute;
background-color: white;
left: 0;
width: 100%;
height: 2px;
top: 9px;
transform: ${({isActivBurger}) => (isActivBurger ? "scale(0)" : "")} ;
  

`;

export const NavContainer = styled.nav<isActivBurgerProps>`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  z-index: 4;
  transition: all 0.7s ease 0s;
  @media (max-width:600px){
    position: fixed;
    top:-100%;
    left: 0;
    width: 100%;
    align-items: flex-end;
    background-color: #5e5373;
    
    padding: 100px 20px 30px;
    flex-direction: column;
    z-index: 2;
    top: ${({isActivBurger}) => (isActivBurger ? "0" : "")};
    
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 20px;
  text-decoration: none;
  color: white;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: rgba(215, 213, 213, 0.3);
 
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  padding: 12px;
  width: 100%;
  background-color: rgba(118, 118, 118, 0.33);
`;


export const SocialIconsContainer = styled.div`
  display: flex;
  gap: 30px;
`;
export const ContactLink = styled.a`
color: white;
text-decoration: none;
  transition: color 0.3s ease;
  &:hover {
  color: #007bff; 
}
`

export const ContactsContainer = styled.div`
 display: flex;
 flex-direction: column;
 gap: 7px;
`;