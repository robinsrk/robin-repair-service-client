import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBIcon,
} from "mdbreact";

const Skill = ({ name, description, icon, color }) => {
  return (
    <div>
      <MDBCol size="4">
        <MDBCard
          style={{
            width: "22rem",
            backgroundColor: "#282a36",
            borderRadius: "20px",
          }}
        >
          <MDBIcon className={color + "-text p-4"} size="3x" icon={icon} />
          <MDBCardBody>
            <MDBCardTitle>{name}</MDBCardTitle>
            <MDBCardText>{description}</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </div>
  );
};
export default Skill;
