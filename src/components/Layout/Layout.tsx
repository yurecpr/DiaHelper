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
} from "./styles";
import { LayotProps } from "./types";
import { FavoritesContextProvider } from "components/Products/Products";



function Layout({ children }: LayotProps) {
  return (
    <FavoritesContextProvider>
    <LayoutComponent>
      <Header>
        <HeaderLogoContainer to="/">
          <HeaderLogo />
        </HeaderLogoContainer>
        <NavContainer>
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
        <SocialIconsContainer>
       
        <ContactLink href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x"/>
        </ContactLink>
        <ContactLink href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
        </ContactLink>
        <ContactLink href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        </ContactLink>
      </SocialIconsContainer>
      <ContactsContainer>
        Contact us
          <ContactLink href="tel:+4988888888">+49 888 88 888</ContactLink>
          <ContactLink href="mailto:diahelper@gmail.com">diahelper@gmail.com</ContactLink>
      </ContactsContainer>
      </Footer>
    </LayoutComponent>
    </FavoritesContextProvider>
  );
}

export default Layout;
