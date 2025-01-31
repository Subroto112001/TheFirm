import React from "react";
import "./index.css"; // or the correct file where :root is defined
import Container from "./Component/Container";
import Header from "./Component/Header";
import Banner from "./Component/Banner";
import PartnerArea from "./Component/PartnerArea";
import "slick-carousel/slick/slick.css";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <PartnerArea/>
    </div>
  );
};

export default App;
