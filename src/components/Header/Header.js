import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "@mui/material";
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
  const [CONFIG, SET_CONFIG] = useState({
    MARKETPLACE_LINK: "",
  });

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

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

  useEffect(() => {
    getConfig();
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <img alt="INGOTINK" src="logo.png" height={32} />
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
            <Link
              href={CONFIG.MARKETPLACE_LINK}
              underline="none"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#fff" }}
            >
              <ConnectButton>OPENSEA</ConnectButton>
            </Link>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Header;
