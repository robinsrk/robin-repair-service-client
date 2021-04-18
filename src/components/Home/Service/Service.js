import React from "react";
import {
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBView,
} from "mdbreact";

const Service = ({ photo, name, description, price }) => {
  return (
    <MDBCol md="6" lg="4" size="12" className="mb-5">
      <MDBCard
        style={{
          width: "22rem",
          backgroundColor: "#282a36",
          borderRadius: "20px",
        }}
      >
        <MDBView hover zoom>
          <MDBCardImage
            className="img-fluid"
            src={photo}
            waves
            style={{ borderRadius: "20px" }}
          />
        </MDBView>
        <MDBCardBody>
          <MDBCardTitle>{name}</MDBCardTitle>
          <MDBCardText>{description}</MDBCardText>
          {/* <MDBBtn gradient="purple" href="#"> */}
          {/*   Buy at ${price} */}
          {/* </MDBBtn> */}
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};
export default Service;
