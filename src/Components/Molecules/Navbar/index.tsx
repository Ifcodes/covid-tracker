import React from "react";
import { Box } from "../../Atoms/IconBox";
import BellIcon from "../../Atoms/Vectors/BellIcon";
import LogoIcon from "../../Atoms/Vectors/logo";
import UserIcon from "../../Atoms/Vectors/UserIcon";
import { NavbarWrapper } from "./navBarStyles";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <div className="logo-wraper">
        <div className="logo-cont">
          <LogoIcon />
        </div>
        <h1>Covid-Tracker</h1>
      </div>
      <div className="nav-tabs">
        <Box>
          <UserIcon />
        </Box>
        <Box>
          <BellIcon />
        </Box>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
