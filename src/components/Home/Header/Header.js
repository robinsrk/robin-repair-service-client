import { MDBBtn, MDBLink } from "mdbreact";
import React from "react";
import repair from "../../../images/repair4.png";

const Header = () => {
  return (
    <div
      style={{ height: "90vh" }}
      className="d-flex row  flex-row align-items-center"
    >
      <div className="col-md-6 offset-1">
        <h1 className="font-weight-bold purple-text">
          Professional <br />
          Computer
          <br />
          Service Center{" "}
        </h1>
        <p>
          Welcome to Robin's computer repair service for all kinds of computer
          repairs and diagnostic
        </p>
        <MDBLink to="/packages">
          <MDBBtn gradient="purple">Book now</MDBBtn>
        </MDBLink>
      </div>
      <img
        alt=""
        className="col-md-4"
        fluid
        style={{ width: "400px", height: "auto", borderRadius: "30px" }}
        src={repair}
      />
    </div>
  );
};
export default Header;
