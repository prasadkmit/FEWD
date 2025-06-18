import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-red" : "")}
        >
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "text-red" : "")}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-red" : "")}>Contact</NavLink>
      </nav>
    </header>
  );
};

export default Header;
