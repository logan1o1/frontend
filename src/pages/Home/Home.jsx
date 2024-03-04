import React from "react";
import "./Home.css";
import Cards from "../../components/Cards";
import Nav from "../../components/Nav";

const Home = () => {
  return (
    <>
      <div className="container">
        <Nav />
        <div className="cards-container">
          <Cards />
        </div>
      </div>
    </>
  );
};

export default Home;
