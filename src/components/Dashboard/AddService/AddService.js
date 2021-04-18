import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

const AddService = () => {
  const [serviceInfo, setServiceInfo] = useState({});

  const handleBlur = (e) => {
    const newServiceInfo = { ...serviceInfo };
    newServiceInfo[e.target.name] = e.target.value;
    setServiceInfo(newServiceInfo);
  };
  const handleReviewSubmit = (e) => {
    fetch("https://afternoon-river-20130.herokuapp.com/addService", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(serviceInfo),
    });
    e.preventDefault();
  };
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form onSubmit={handleReviewSubmit}>
            <p className="h4 text-center mb-4">Add New Service</p>
            <label className="grey-text">Service name</label>
            <input
              onBlur={handleBlur}
              type="text"
              name="serviceName"
              className="form-control dark-bg"
            />
            <br />
            <label className="grey-text">Service description</label>
            <input
              onBlur={handleBlur}
              name="serviceDescription"
              type="text"
              className="dark-bg form-control"
            />
            <br />
            <label className="grey-text">Service price</label>
            <input
              onBlur={handleBlur}
              name="servicePrice"
              type="text"
              className="dark-bg form-control"
            />
            <br />
            <label className="grey-text">Service photo url</label>
            <input
              name="servicePhoto"
              type="text"
              onBlur={handleBlur}
              className="form-control dark-bg"
            />
            <div className="text-center mt-4">
              <MDBBtn gradient="purple" type="submit">
                submit
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
export default AddService;
