import { MDBRow } from "mdbreact";
import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
    fetch("https://afternoon-river-20130.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setServiceData(data);
      });
  }, []);
  console.log(serviceData);

  return (
    <div className="text-center mb-5">
      <h1 className="font-weight-bold purple-text">What we offer</h1>
      <p>
        We provide various computer repair services and solutions for our <br />{" "}
        new and regular customers. Feel free to find out more below.
      </p>
      <div className="d-flex justify-content-around mb-5">
        <MDBRow style={{ marginBottom: "150px" }}>
          {serviceData.map((service) => (
            <Service
              name={service.serviceName}
              description={service.serviceDescription}
              price={service.servicePrice}
              photo={service.servicePhoto}
            />
          ))}
        </MDBRow>
      </div>
    </div>
  );
};
export default Services;
