import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import React, { useState, useContext } from "react";
import { UserContext } from "../../../App";
import { useLocation, useHistory } from "react-router";
import { MDBBtn } from "mdbreact";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const location = useLocation();
  const history = useHistory();
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const [user, setUser] = useState({
    isLoggedIn: false,
    newUser: false,
    name: "",
    email: "",
    photo: "",
    password: "",
    confirm: "",
  });
  const { from } = location.state || { from: { pathname: "/" } };
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const { displayName, photoURL, email } = result.user;
        console.log(result);
        const signedInUser = {
          isSignedIn: true,
          newUser: false,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="text-center" style={{ minHeight: "95vh" }}>
      <MDBBtn gradient="purple" className="mt-5" onClick={handleGoogleSignIn}>
        Sign In With Google
      </MDBBtn>
    </div>
  );
};
export default Login;
