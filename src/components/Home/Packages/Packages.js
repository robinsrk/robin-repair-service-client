import { MDBRow } from "mdbreact";
import React, { useEffect, useState } from "react";
import Package from "../Package/Package";
import "./Packages.css";

const Packages = (props) => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("https://afternoon-river-20130.herokuapp.com/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  console.log(packages);

  return (
    <div
      className="text-center white-text "
      style={props.height && { minHeight: props.height }}
    >
      <h1 className="purple-text font-weight-bold">Select Your Package</h1>
      <div className="d-flex justify-content-center mb-5">
        <MDBRow>
          {packages.map((data) => (
            <Package
              id={data._id}
              description={data.packageDetails}
              name={data.name}
              price={data.packagePrice}
              services={data.packageService}
            />
          ))}
        </MDBRow>
      </div>
    </div>
  );
};
export default Packages;
