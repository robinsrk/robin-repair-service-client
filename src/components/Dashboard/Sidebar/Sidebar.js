import React, { useContext, useEffect, useState } from "react";

import { MDBNav, MDBNavLink, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { UserContext } from "../../../App";
const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  console.log(loggedInUser.email);
  useEffect(() => {
    fetch("https://afternoon-river-20130.herokuapp.com/isAdmin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, [loggedInUser.email]);

  return (
    <div>
      <MDBRow>
        <MDBCol>
          <MDBNav
            style={{ minHeight: "95vh" }}
            color="purple-gradient"
            className="flex-column font-weight-bold"
          >
            <MDBNavLink
              className="white-text font-weight-bold"
              to="/dashboard/history"
            >
              History
            </MDBNavLink>
            {isAdmin ? (
              <div>
                <MDBNavLink
                  className="white-text font-weight-bold"
                  to="/dashboard/addService"
                >
                  Add Service
                </MDBNavLink>
                <MDBNavLink
                  className="white-text font-weight-bold"
                  to="/dashboard/allServices"
                >
                  All Services
                </MDBNavLink>
                <MDBNavLink
                  className="white-text font-weight-bold"
                  to="/dashboard/addAdmin"
                >
                  Add new admin
                </MDBNavLink>
              </div>
            ) : (
              <MDBNavLink
                className="white-text font-weight-bold"
                to="/dashboard/review"
              >
                Review
              </MDBNavLink>
            )}
          </MDBNav>
        </MDBCol>
      </MDBRow>
    </div>
  );
};
export default Sidebar;
