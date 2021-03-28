import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <div className="nav-menu">
        <Link to="/home" className="menu-bars">
          Home
        </Link>
        <Link to="/allstock/view" className="menu-bars">
          Stocks
        </Link>
      </div>
      <div className="navDivStyle">
        <h1 className="h1">Welome to the Stock App</h1>
      </div>
    </>
  );
}

export default Navbar;
