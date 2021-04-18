import {
  MDBBtn,
  MDBCol,
  MDBLink,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdbreact";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../../App";
import PaymentProcess from "../PaymentProcess/PaymentProcess";

const Checkout = () => {
  const { id } = useParams();
  const [packageDetails, setPackageDetails] = useState({});
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch(`https://afternoon-river-20130.herokuapp.com/package/${id}`)
      .then((res) => res.json())
      .then((data) => setPackageDetails(data[0]));
  }, [id]);
  return (
    <div style={{ minHeight: "95vh" }} className="text-center">
      <h1 className="font-weight-bold purple-text mb-5">Checkout</h1>
      <MDBRow>
        <MDBCol>
          <MDBTable>
            <MDBTableHead>
              <tr>
                <th>User</th>
                <th>Package</th>
                <th>Price</th>
                <th>Order Date</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <th>{loggedInUser.name}</th>
                <th>{packageDetails.packageName}</th>
                <th>{packageDetails.packagePrice}</th>
                <th>{new Date().toDateString()}</th>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </MDBCol>
        <MDBCol className="mt-5">
          <PaymentProcess packageDetails={packageDetails}></PaymentProcess>
        </MDBCol>
      </MDBRow>
    </div>
  );
};
export default Checkout;
