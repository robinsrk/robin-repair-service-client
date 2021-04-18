import React, { useContext, useState } from "react";
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
import { UserContext } from "../../../App";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div>
      <MDBNavbar color="purple-gradient" dark expand="md">
        <MDBNavbarBrand>
          <img alt="" style={{ width: "60px" }} src={logo} />
          <span className="white-text"> Robin Service Center</span>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav center>
            <MDBNavItem>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">About</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/packages">Services</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Pricing</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              {loggedInUser.isSignedIn ? (
                <MDBNavLink to="/dashboard">Dashboard</MDBNavLink>
              ) : (
                <MDBNavLink to="/login">Login</MDBNavLink>
              )}
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
                  <h4>+8801777000025</h4>
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
