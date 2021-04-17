import React from "react";
import {
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdbreact";

const Service = ({ photo, name, description, price }) => {
  return (
    <MDBCol size="4">
      <MDBCard style={{ width: "22rem", backgroundColor: "#282a36" }}>
        <MDBCardImage className="img-fluid" src={photo} waves />
        <MDBCardBody>
          <MDBCardTitle>{name}</MDBCardTitle>
          <MDBCardText>{description}</MDBCardText>
          <MDBBtn gradient="purple" href="#">
            Buy at ${price}
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};
export default Service;
