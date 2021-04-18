import { MDBRow } from "mdbreact";
import React, { useEffect, useState } from "react";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://afternoon-river-20130.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  });

  return (
    <div className="text-center" style={{ marginTop: "150px" }}>
      <h1 className="purple-text font-weight-bold">
        Here are the reviews of our satisfied customers
      </h1>

      <MDBRow className="d-flex justify-content-center mt-5 offset-2">
        {reviews.map((review) => (
          <Review
            name={review.name}
            comment={review.comment}
            feedback={review.feedback}
          ></Review>
        ))}
      </MDBRow>
    </div>
  );
};
export default Reviews;
