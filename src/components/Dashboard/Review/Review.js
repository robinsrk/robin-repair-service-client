import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import "./Review.css";

const Review = () => {
  const [getReview, setGetReview] = useState({});

  const handleBlur = (e) => {
    const newReview = { ...getReview };
    newReview[e.target.name] = e.target.value;
    setGetReview(newReview);
    console.log(newReview);
  };
  const handleReviewSubmit = (e) => {
    fetch("https://afternoon-river-20130.herokuapp.com/addReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(getReview),
    }).then(alert("Your review submitted"));
    e.preventDefault();
  };
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form onSubmit={handleReviewSubmit}>
            <p className="h4 text-center mb-4">Give Feedback</p>
            <label className="grey-text">Your name</label>
            <input
              onBlur={handleBlur}
              type="text"
              name="name"
              className="form-control dark-bg"
            />
            <br />
            <label className="grey-text">Your feedback</label>
            <select
              onBlur={handleBlur}
              name="feedback"
              className="browser-control dark-bg custom-select"
            >
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Bad">Bad</option>
            </select>
            <br />
            <br />
            <label className="grey-text">Your comment</label>
            <input
              onBlur={handleBlur}
              name="comment"
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
export default Review;
