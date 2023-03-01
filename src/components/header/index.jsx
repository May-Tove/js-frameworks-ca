import React from "react";
import Logo from "../../images/smartcart-low-resolution-logo-white-on-transparent-background.png";
import { Nav } from "./navigation/index.jsx";
import * as styled from "../../styles/components/header/index.js";

const Header = () => {
  return (
    <styled.HeaderContainer>
      <styled.Logo src={Logo} alt="Logo" />
      <Nav />
    </styled.HeaderContainer>
  );
};

export default Header;
