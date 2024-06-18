import { useNavigate } from "react-router-dom";
import {
  Footer,
  Header,
  HeaderLogo,
  HeaderLogoContainer,
  LayoutComponent,
  Main,
  NavContainer,
  StyledNavLink,
  ContactsContainer,
  HeaderBurger,
  HeaderBurgerElement,

} from "./styles";
import { LayotProps } from "./types";
import { useState } from "react";


function Layout({ children }: LayotProps) {
  const [isActiveBurger, setIsActiveBurger] = useState<boolean>(false);

  const activeBurger = () => {
    setIsActiveBurger((prev) => !prev);
  };

  const navigate = useNavigate()

  return (
    <LayoutComponent>
      <Header>
        <HeaderLogoContainer to="/">
          <HeaderLogo />
        </HeaderLogoContainer>
        <HeaderBurger onClick={activeBurger} isActivBurger={isActiveBurger}>
          <HeaderBurgerElement isActivBurger={isActiveBurger}></HeaderBurgerElement>
        </HeaderBurger>
        
        <NavContainer isActivBurger={isActiveBurger}>
          <StyledNavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            to="/products"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Products
          </StyledNavLink>
          <StyledNavLink
            to="/login"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Login
          </StyledNavLink>
          <StyledNavLink
            to="/user"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            User
          </StyledNavLink>
        </NavContainer>
      </Header>

      <Main>{children}</Main>

      <Footer>
        <HeaderLogoContainer to="/">
          <HeaderLogo />
        </HeaderLogoContainer>
       
      <ContactsContainer onClick={() => navigate("/about")}>
        About us 
      </ContactsContainer>
      </Footer>
    </LayoutComponent>
  );
}

export default Layout;
