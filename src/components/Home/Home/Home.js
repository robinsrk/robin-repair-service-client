import React from "react";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";
import "./Home.css";
import Packages from "../Packages/Packages";
import Reviews from "../Reviews/Reviews";
import Footer from "../../Shared/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Services />
      <Skills />
      <Packages />
      <Reviews />
      <Footer />
    </div>
  );
};
export default Home;
