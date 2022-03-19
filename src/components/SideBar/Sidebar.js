import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            ABOUT
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>
            GALLERY
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            ROADMAP
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>
            TEAM
          </SidebarLink>
        </SidebarMenu>
        {/* <SideBtnWrap>
          <SidebarRoute to='/signin'>Sign in</SidebarRoute>
        </SideBtnWrap> */}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
