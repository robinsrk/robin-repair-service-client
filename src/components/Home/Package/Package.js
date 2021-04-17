import React from "react";
import {
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdbreact";
import "./Package.css";

const Package = ({ services, price, name, description }) => {
  return (
    <div>
      <MDBCol size="4" className="text-center">
        <MDBCard
          style={{
            width: "22rem",
            backgroundColor: "#282a36",
            borderRadius: "20px",
            minHeight: "600px",
          }}
        >
          <MDBCardBody>
            <h1 className="font-weight-bold">{name}</h1>
            <MDBCardText>{description}</MDBCardText>
            <h1 className="blue-text m-5">${price}</h1>
            <div className=" card-table ">
              {services.map((service) => (
                <p>{service}</p>
              ))}
              <MDBBtn gradient="purple" className="button">
                Buy Now
              </MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </div>
  );
};
export default Package;
