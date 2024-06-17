import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
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
  SocialIconsContainer,
  ContactLink,
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
        {/* <SocialIconsContainer>
       
        <ContactLink href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x"/>
        </ContactLink>
        <ContactLink href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
        </ContactLink>
        <ContactLink href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        </ContactLink>
      </SocialIconsContainer> */}
      <ContactsContainer>
        About us
          
      </ContactsContainer>
      </Footer>
    </LayoutComponent>
  );
}

export default Layout;
