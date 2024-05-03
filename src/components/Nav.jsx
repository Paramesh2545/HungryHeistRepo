import React from "react";
import { GrMapLocation } from "react-icons/gr";
import { CiHome } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { IoMdPerson } from "react-icons/io";
import "../styles.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navmain">
      <div className="innernav">
        <NavLink to="/">
          <CiHome className="navelements" />
        </NavLink>
        <NavLink to="/near">
          <GrMapLocation className="navelements" />
        </NavLink>
        <NavLink to="/cart">
          <SlBasket className="navelements" />
        </NavLink>
        <NavLink to="/profile">
          <IoMdPerson className="navelements" />
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
