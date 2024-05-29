import styled from "@emotion/styled";
import { Logo } from "assets";
import { Link, NavLink } from "react-router-dom";

export const LayoutComponent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:12px 20px;
  width: 100%;
  background-color: #04BFBF;
  color: white;
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
  padding: 20px;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  padding: 12px;
  width: 100%;
  background-color: #04BFBF;
  color: white;
`;
