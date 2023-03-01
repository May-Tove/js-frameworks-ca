import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import * as styled from "../../styles/components/cart-icon/index.js";

const CartIcon = () => {
  const [cartItems, setCartItems] = useState(0);

  return (
    <styled.Cart>
      <FontAwesomeIcon icon={faShoppingCart} />
      {cartItems > 0 && <styled.CartOverlay>{cartItems}</styled.CartOverlay>}
    </styled.Cart>
  );
};

export default CartIcon;
