import "./App.css";
import Navbar from "./components/Shared/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import { createContext, useState } from "react";
import Checkout from "./components/Shared/Checkout/Checkout";
import Login from "./components/Home/Login/Login";
import PrivateRoute from "./components/Shared/PrivateRoute/PrivateRoute";
import Packages from "./components/Home/Packages/Packages";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Navbar />
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/packages">
              <Packages height="95vh" />
            </Route>
            <PrivateRoute path="/checkout/:id">
              <Checkout />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
