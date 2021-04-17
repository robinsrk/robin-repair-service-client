import React from "react";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";
import "./Home.css";
import Packages from "../Packages/Packages";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Services />
      <Skills />
      <Packages />
    </div>
  );
};
export default Home;
