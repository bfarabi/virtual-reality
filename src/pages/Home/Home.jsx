import React from "react";
import Attraction from "../../components/Attraction/Attraction";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
const Home = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Header />
      <Attraction />
    </div>
  );
};

export default Home;
