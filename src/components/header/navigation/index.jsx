import { Link } from "react-router-dom";
import CartIcon from "../../cart-icon/index.jsx";
import * as styled from "../../../styles/components/header/index.js";

export const Nav = () => {
  return (
    <nav>
      <styled.UnorderedList>
        <styled.NavLink>
          <Link to="/">Home</Link>
        </styled.NavLink>
        <styled.NavLink>
          <Link to="/contact">Contact</Link>
        </styled.NavLink>
        <styled.NavLink>
          <Link to="/checkout">
            {" "}
            <CartIcon />
          </Link>
        </styled.NavLink>
      </styled.UnorderedList>
    </nav>
  );
};
