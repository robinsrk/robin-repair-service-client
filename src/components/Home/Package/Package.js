import React from "react";
import {
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBBtn,
  MDBLink,
} from "mdbreact";
import "./Package.css";

const Package = ({ id, services, price, name, description }) => {
  return (
    <MDBCol size="12" md="6" lg="4" className="text-center">
      <MDBCard
        style={{
          width: "22rem",
          backgroundColor: "#282a36",
          borderRadius: "20px",
        }}
      >
        <MDBCardBody>
          <h1 className="font-weight-bold">{name}</h1>
          <MDBCardText>{description}</MDBCardText>
          <h1 className="blue-text m-5">${price}</h1>
          <div>
            {services.map((service) => (
              <p>{service}</p>
            ))}
            <MDBLink to={"/checkout/" + id}>
              <MDBBtn gradient="purple">Buy Now</MDBBtn>
            </MDBLink>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};
export default Package;
