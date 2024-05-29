import {
  Footer,
  Header,
  HeaderLogo,
  HeaderLogoContainer,
  LayoutComponent,
  Main,
  NavContainer,
  StyledNavLink,
} from "./styles";
import { LayotProps } from "./types";

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
      </Footer>
    </LayoutComponent>
  );
}

export default Layout;
