import React from "react";
import "./index.css"; // or the correct file where :root is defined
import Container from "./Component/Container";
import Header from "./Component/Header";
import Banner from "./Component/Banner";
import OurPartner from "./Component/OurPartner";
import "slick-carousel/slick/slick.css";
import Frustration from "./Component/Frustration";
import PerfectSolution from "./Component/PerfectSolution"
import OurReasearc from "./Component/OurReasearc";
import SlickSlider from "./Component/CommonComponent/SlickSlider";
import Ourblogs from "./Component/Ourblogs";
const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <OurPartner />

      <Frustration />
      <PerfectSolution />
      <OurReasearc />
      <Ourblogs />
    </>
  );
};

export default App;
