import React, { useState } from "react";
import logo from "../../../images/repair-logo.png";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavLink,
  MDBNavItem,
  MDBIcon,
} from "mdbreact";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <MDBNavbar color="purple-gradient" dark expand="md">
        <MDBNavbarBrand>
          <img alt="" style={{ width: "60px" }} src={logo} />
          <span className="white-text"> Robin Repair</span>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav center>
            <MDBNavItem>
              <MDBNavLink to="#!">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">About</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Services</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Pricing</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">News</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right className="align-items-center">
            <MDBNavItem className="pr-3">
              <MDBNavLink to="#!">
                <MDBIcon icon="shopping-cart"></MDBIcon>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">
                <div className="text-center">
                  <small>Call us for more information</small>
                  <h4>+19048770880</h4>
                </div>
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </div>
  );
};
export default Navbar;
