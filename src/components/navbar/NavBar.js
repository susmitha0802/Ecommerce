import { NavLink } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products/:id">Product</NavLink>
    </nav>
  )
}
