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
  SocialIcons,
} from "./styles";
import { LayotProps } from "./types";
import { FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';

function Layout({ children }: LayotProps) {
  return (
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
        <SocialIcons>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
      </SocialIcons>
      <ContactsContainer>
        <h4>Contact us</h4>
          <p><a href="tel:+4988888888">+49 888 88 888</a></p>
          <p><a href="mailto:diahelper@gmail.com">diahelper@gmail.com</a></p>
      </ContactsContainer>
      </Footer>
    </LayoutComponent>
  );
}

export default Layout;
