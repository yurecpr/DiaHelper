import styled from "@emotion/styled";
import { Banner, Logo } from "assets";
import { Link, NavLink } from "react-router-dom";

export const LayoutComponent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

// export const Header = styled.header`
//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   align-items: center;
//   padding:12px 20px;
//   width: 100%;
//   background-color: rgba(0, 90, 117, 0.2);
  
// `;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 12px 20px;
  width: 100%;
  background-color: rgba(0, 90, 117, 0.2);
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

// export const Main = styled.main`
//   display: flex;
//   flex-direction: column;
//   flex: 1;
//   position: relative;
//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     z-index: 1;
//     width: 100%;
//     height: 100%;
//     background-image: url(${Banner});
//     background-repeat: no-repeat;
//     background-size: cover;
//     opacity: 0.3;
//    }
// `;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  margin-top: -100px;
  margin-bottom :-100px ;
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

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  padding: 12px;
  width: 100%;
  background-color: rgba(0, 90, 117, 0.3);
  color: white;
  position: relative; 
  z-index:1;
`;


export const SocialIcons = styled.footer`
  display: flex;
  padding-left: 39%;
  gap: 30px;

a {
  color: white;
  transition: color 0.3s ease;
}

a:hover {
  color: #007bff; 
}
`;

export const ContactsContainer = styled.footer`
  color: white;
  padding-left: 350px;
  

a {
  color: white;
  transition: color 0.3s ease;
}

a:hover {
  color: #007bff;
}
`;