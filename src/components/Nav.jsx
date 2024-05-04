import React from "react";
import { GrMapLocation } from "react-icons/gr";
import { CiHome } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { IoMdPerson } from "react-icons/io";
import "../styles.css";
import "../styles/navbar.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navmain">
      <div className="innernav">
        <div className="navitems first">
          <NavLink to="/">
            <CiHome className="navelements" />
          </NavLink>
          <p className="link-text firstpara">Home</p>
        </div>
        <div className="navitems second">
          <NavLink to="/near">
            <GrMapLocation className="navelements" />
          </NavLink>
          <p className="link-text secondpara">Nearby</p>
        </div>
        <div className="navitems third">
          <NavLink to="/cart">
            <SlBasket className="navelements" />
          </NavLink>
          <p className="link-text thirdpara">Cart</p>
        </div>
        <div className="navitems fourth">
          <NavLink to="/profile">
            <IoMdPerson className="navelements" />
          </NavLink>
          <p className="link-text fourthpara">Profile</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
