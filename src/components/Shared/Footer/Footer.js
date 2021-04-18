import React from "react";

import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

const Footer = () => {
  return (
    <div>
      <MDBFooter color="purple" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="4">
              <h5 className="title">Robin-Computer-Service</h5>
              <p>
                Welcome to Robin's computer repair service for all kinds of
                computer repairs and diagnostic{" "}
              </p>
            </MDBCol>
            <MDBCol md="4">
              <h5 className="title">Contact us</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="#!">About</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Details</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Address</a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol md="4">
              <h3>Find us</h3>
              <ul>
                <li className="list-unstyled">
                  <a className="m-1" href="http://www.facebook.com">
                    <MDBIcon fab icon="facebook-f"></MDBIcon>
                  </a>
                  <a className="m-1" href="http://www.youtube.com">
                    <MDBIcon fab icon="youtube"></MDBIcon>
                  </a>
                  <a className="m-1" href="http://www.facebook.com">
                    <MDBIcon fab icon="twitter"></MDBIcon>
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:
            <a href="www.robin-computer-service.web.app">
              robin-computer-service
            </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
};
export default Footer;
