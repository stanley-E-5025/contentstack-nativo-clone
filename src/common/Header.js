import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";

import "../assets/css/custom.css";

function Header() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="custom-logo-container  " href="#">
            <Logo />
          </a>

          <button
            className="navbar-toggler custom-toggle-button "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div
            className="  collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 options-container ">
              <div className="option">About</div>
              <div className="option">Services</div>
              <div className="option">Insights</div>
              <div className="option">Careers</div>
              <div className="option">Contacts</div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
