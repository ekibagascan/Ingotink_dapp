import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#000000" : "transparent")};
  height: 80px;
  margin-top: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  align-items: center;
  padding: 0 24px;
  max-width: 1100px;
`;
export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 20px;
  font-weight: bold;
  text-decoration: none;
`;
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    position: absolute;
    display: block;
    right: 0;
    margin-bottom: 40px;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  text-align: center;
  align-items: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
`;
export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 15px;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

export const ConnectButton = styled.button`
  padding: 1rem 1.2rem;
  margin: 20px;
  border: none;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.8em;
  cursor: pointer;
  box-shadow: none;
  background-color: #101522;
  color: #fff;
  transition: 0.5s;
  &:hover {
    background-color: #fff;
    color: rgba(0, 0, 0, 1) !important;
    box-shadow: none;
  }
`;
