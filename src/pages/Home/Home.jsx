import React, { useEffect, useState } from "react";
import "./Home.css";
import Cards from "../../components/Cards";

const Home = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const getList = async () => {
      try {
        const res = await fetch("http://localhost:8888/user/get-listed", {
          method: "GET"
        });
        const data = await res.json();
        setBooks(data)
      } catch (error) {
        console.log(error.message);
      }
    }
    getList()
  }, [])
  

  return (
    <>
      <div className="container">
        <div className="cards-container">
          {books && books.map((book) => {})}
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </>
  );
};

export default Home;
