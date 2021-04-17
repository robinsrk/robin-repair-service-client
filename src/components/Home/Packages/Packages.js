import React, { useEffect, useState } from "react";
import Package from "../Package/Package";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3300/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  console.log(packages);

  return (
    <div className="text-center mt-5">
      <h1 className="purple-text font-weight-bold">Select Your Package</h1>

      <div className="d-flex justify-content-center mb-5">
        {packages.map((data) => (
          <Package
            description={data.description}
            name={data.name}
            price={data.price}
            services={data.services}
          />
        ))}
      </div>
    </div>
  );
};
export default Packages;
