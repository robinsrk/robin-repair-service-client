import { MDBCol, MDBRow } from "mdbreact";
import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Review from "../Review/Review";
import History from "../History/History";
import AddAdmin from "../AddAdmin/AddAdmin";
import AllServices from "../AllServices/AllServices";
import AddService from "../AddService/AddService";

const Dashboard = () => {
  return (
    <Router>
      <MDBRow>
        <MDBCol md="1">
          <Sidebar />
        </MDBCol>
        <Switch>
          <MDBCol>
            <Route exact path="/dashboard/">
              <History />
            </Route>
            <Route path="/dashboard/history">
              <History />
            </Route>
            <Route path="/dashboard/review">
              <Review />
            </Route>
            <Route path="/dashboard/addAdmin" component={AddAdmin} />
            <Route path="/dashboard/allServices" component={AllServices} />
            <Route path="/dashboard/addService" component={AddService} />
          </MDBCol>
        </Switch>
      </MDBRow>
    </Router>
  );
};
export default Dashboard;
