import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  ConnectButton,
} from "./HeaderElements";

const Header = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <img alt="INGOTINK" src="logo.svg" height={45} />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={58}
              >
                ABOUT
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="gallery"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-30}
              >
                GALLERY
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="timeline"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={70}
              >
                ROADMAP
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="team"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-50}
              >
                TEAM
              </NavLinks>
            </NavItem>
            <ConnectButton>OPENSEA</ConnectButton>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Header;
