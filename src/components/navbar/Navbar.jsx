import React from "react";
import "./navbar.css";
import logo from './logo.png'
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="Navbar">
      <div class="navbar">
        <h2>BSF - Business Service Finance</h2>
        <Link to={"/"}>Home</Link>
        <div class="dropdown">
          <button class="dropbtn">
            Services
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <Link to={"/Services"}>Registration</Link>
            <Link to={"/Query"}>Enquiry</Link>
          </div>
        </div>
        <Link to={"/AboutUs"}>About Us</Link>
      </div>
    </div>
  );
};
