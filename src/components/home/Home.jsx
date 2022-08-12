import React from "react";
import { Helmet } from "react-helmet-async";
import Featured from "./featured/Featured";
import Hero from "./hero/Hero";
import Price from "./price/Price";
import Recent from "./recent/Recent";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Hero />
      <Featured />
      <Recent />
      {/* <Awards />
      <Location />
      <Team /> */}
      <Price />
    
    </>
  );
};

export default Home;
