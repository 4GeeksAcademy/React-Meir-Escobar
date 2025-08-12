import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

import img from "/src/img/500x325.png";

const Home = () => {
  const cardsData = [
    {
      img,
      title: "Card 1",
      description: "Pimera card."
    },
    {
      img,
      title: "Card 2",
      description: "Segunda card."
    },
    {
      img,
      title: "Card 3",
      description: "Tercera card."
    },
    {
      img,
      title: "Card 4",
      description: "Cuarta card."
    }
  ];

  return (
    <div>
      <Navbar />
      <div className="container my-5">
        <Jumbotron />
        <div className="row m-4">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              img={card.img}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
