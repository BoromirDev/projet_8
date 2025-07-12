import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";
import imgBanner from "../assets/IMG.svg";
import data from "../data/data.json";
import Cards from "../components/Cards";
import Banner from "../components/Banner";

function Home() {

  return (
    <main className="home-container">

    <Banner imgBanner={imgBanner}>
     Chez vous, partout et ailleurs
    </Banner>

      <section className="cards-container">
        {data.map((item) => (
          <Cards
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.cover}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;