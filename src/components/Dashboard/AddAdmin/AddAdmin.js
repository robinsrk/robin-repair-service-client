import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

const AddAdmin = () => {
  const [info, setInfo] = useState({});

  const handleBlur = (e) => {
    const newReview = { ...info };
    newReview[e.target.name] = e.target.value;
    setInfo(newReview);
    console.log(newReview);
  };
  const handleReviewSubmit = (e) => {
    fetch("https://afternoon-river-20130.herokuapp.com/addAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(info),
    }).then(alert("Admin added"));
    e.preventDefault();
  };
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form onSubmit={handleReviewSubmit}>
            <p className="h4 text-center mb-4">Add new Admin</p>
            <label className="grey-text">Admin name</label>
            <input
              onBlur={handleBlur}
              type="text"
              name="adminName"
              className="form-control dark-bg"
            />
            <br />
            <label className="grey-text">Admin comment</label>
            <input
              onBlur={handleBlur}
              name="adminEmail"
              type="text"
              className="dark-bg form-control"
            />
            <br />
            <label className="grey-text">Admin Mobile no</label>
            <input
              onBlur={handleBlur}
              name="adminMobile"
              type="text"
              className="dark-bg form-control"
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
export default AddAdmin;
