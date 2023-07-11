import React from "react";
import logo from "/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar_wrapper">
        <div className="navbar_container">
          <span className="logo_wrapper">
            <span className="logo_container">
              <span className="logo_icon">
                <img src={logo} alt="oplata" />
              </span>
              <span className="logo_text">öplata</span>
            </span>
          </span>
          <span className="nav_icons_wrapper">
            <span className="nav_icons">
              <i class="material-symbols-outlined">home_app_logo</i>
            </span>
            <span className="nav_icons">
              <i class="material-symbols-outlined icon">inventory_2 </i>
            </span>
            <span className="nav_icons">
              <i class="material-symbols-outlined icon">widgets</i>
            </span>
            <span className="nav_icons">
              <i class="material-symbols-outlined icon">sync_alt</i>
            </span>
            <span className="nav_icons">
              <i class="material-symbols-outlined icon">list_alt</i>
            </span>
            <span className="nav_icons">
              <span class="material-symbols-outlined icon">equalizer</span>
            </span>
          </span>
          <span className="user_wrapper">
            <span className="user_avi"></span>
            <span className="user_name_wrapper">
              <span className="user_name">annette max</span>
              <span className="user_email sm_text">annette@oplata.com</span>
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
