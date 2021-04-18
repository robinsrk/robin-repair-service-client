import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBIcon,
  MDBBtn,
} from "mdbreact";
import React, { useEffect, useState } from "react";

const AllServices = () => {
  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
    fetch("http://afternoon-river-20130.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setServiceData(data);
      })
      .then(alert("Service Added"));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://afternoon-river-20130.herokuapp.com/delete/${id}`, {
      method: "DELETE",
    }).then(alert("Data deleted"));
  };
  return (
    <div>
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th>Service Name</th>
            <th>Service Price</th>
            <th>Edit</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {serviceData.map((service) => (
            <tr>
              <th>{service.serviceName}</th>
              <th>{service.servicePrice}</th>
              <th>
                <MDBBtn
                  onClick={() => handleDelete(service._id)}
                  size="sm"
                  color="red"
                >
                  <MDBIcon size="lg" far icon="trash-alt" />
                </MDBBtn>
              </th>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
};
export default AllServices;
