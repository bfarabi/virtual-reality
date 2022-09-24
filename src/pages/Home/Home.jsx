import React from "react";
import Attraction from "../../components/Attraction/Attraction";
import GamesAndExp from "../../components/GamesAndExp/GamesAndExp";
import Header from "../../components/Header/Header";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
const Home = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Header />
      <Attraction />
      <HowItWorks />
      <GamesAndExp />
    </div>
  );
};

export default Home;
