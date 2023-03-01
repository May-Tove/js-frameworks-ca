import React from "react";
import CartIcon from "../cart-icon/index.jsx";
import Logo from "../../images/smartcart-low-resolution-logo-white-on-transparent-background.png";
import * as styled from "../../styles/components/header/index.js";

const Header = () => {
  return (
    <styled.HeaderContainer>
      <styled.Logo src={Logo} alt="Logo" />
      <nav>
        <styled.UnorderedList>
          <styled.Link>Home</styled.Link>
          <styled.Link>Contact</styled.Link>
          <styled.Link>
            <CartIcon />
          </styled.Link>
        </styled.UnorderedList>
      </nav>
    </styled.HeaderContainer>
  );
};

export default Header;
