import styled from "@emotion/styled";
import { Banner, Logo } from "assets";
import { Link, NavLink } from "react-router-dom";

export const LayoutComponent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  z-index: 1; 
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1; 
    width: 100%;
    height: 100%;
    background-image: url(${Banner});
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.3;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 12px 20px;
  width: 100%;
  background-color: rgba(118, 118, 118, 0.33);
  z-index: 3; 
`;

export const HeaderLogoContainer = styled(Link)`
  width: 75px;
  height: 75px;
`;

export const HeaderLogo = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
HeaderLogo.defaultProps = { src: Logo };

export const NavContainer = styled.nav`
  display: flex;
  gap: 20px;
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
  z-index:1;
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