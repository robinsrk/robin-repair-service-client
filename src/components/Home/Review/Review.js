import React from "react";

import { MDBCol, MDBCard, MDBCardBody, MDBCardText } from "mdbreact";
const Review = ({ name, comment, feedback }) => {
  return (
    <MDBCol size="12" md="6" lg="4" className="mb-5">
      <MDBCard
        style={{
          width: "22rem",
          backgroundColor: "#282a36",
          borderRadius: "20px",
        }}
      >
        <MDBCardBody>
          <h1 className="font-weight-bold">{name}</h1>
          <MDBCardText>{comment}</MDBCardText>
          <h4 className="mt-5">{feedback}</h4>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};
export default Review;
