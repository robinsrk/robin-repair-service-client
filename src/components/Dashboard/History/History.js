import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const History = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [historyList, setHistoryList] = useState([]);
  useEffect(() => {
    fetch("https://afternoon-river-20130.herokuapp.com/orderHistory", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setHistoryList(data));
  }, [loggedInUser]);

  console.log(historyList);
  return (
    <MDBTable>
      <MDBTableHead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Package Name</th>
          <th>Package Price</th>
          <th>Order Date</th>
          <th>Status</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {historyList.map((history) => (
          <tr>
            <td>{history.name}</td>
            <td>{history.email}</td>
            <td>{history.packageName}</td>
            <td>{history.packagePrice}</td>
            <td>{history.date}</td>
            <th>{history.status}</th>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};
export default History;
