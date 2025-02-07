import React from "react";
import Slider from "react-slick";

import Pictutre1 from '../assets/Unplash1.jpg'
import Pictutre2 from '../assets/Unplash2.jpg'
import Pictutre3 from '../assets/Unplush3.jpg'
import Pictutre4 from '../assets/Unplush4.jpg'
import Pictutre5 from '../assets/Unplush5.jpg'
import Pictutre6 from '../assets/Unplush6.jpg'
import Pictutre7 from '../assets/Unplush7.jpg'
import Pictutre8 from '../assets/Unplush8.jpg'
import Pictutre9 from '../assets/Unplush9.jpg'
import Pictutre10 from '../assets/Unplush10.jpg'
import Pictutre11 from '../assets/Unplush11.jpg'
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const SlickSlider = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          position: "absolute",
          top: "50%",
          right: "0px",

          width: "46px",
          height: "38px",

          zIndex: "3",

          display: "flex",
          justifyContent: "center",
          alignItems: " center",
        }}
        onClick={onClick}
      >
        <div className="OurPartner w-full h-full text-black">
          <MdNavigateNext />
        </div>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          position: "absolute",
          top: "50%",
          left: "-51px",

          width: "46px",
          height: "38px",

          zIndex: "3",
        }}
        onClick={onClick}
      >
        <div className=" w-full h-full OurPartner text-black">
          <GrFormPrevious />
        </div>
      </div>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
    
      <div className="containers">
        <div className="wrapper  drop-shadow-lg    ">
          <div className="slider-container ">
            <Slider {...settings}>
              <div className="w-[240px] h-[120px] rounded-md  ">
                <picture>
                  <img
                    src={Pictutre1}
                    alt={Pictutre1}
                    className="w-[240px] h-[120px] rounded-md"
                  />
                </picture>
              </div>
              <div className="w-[240px] h-[120px] rounded-md ">
                <picture>
                  <img
                    src={Pictutre2}
                    alt={Pictutre2}
                    className="w-[240px] h-[120px] rounded-md"
                  />
                </picture>
              </div>
              <div className="w-[240px] h-[120px] rounded-md ">
                <picture>
                  <img
                    src={Pictutre3}
                    alt={Pictutre3}
                    className="w-[240px] h-[120px] rounded-md"
                  />
                </picture>
              </div>
              <div className="w-[240px] h-[120px] rounded-md ">
                <picture>
                  <img
                    src={Pictutre4}
                    alt={Pictutre4}
                    className="w-[240px] h-[120px] rounded-md"
                  />
                </picture>
              </div>
              <div className="w-[240px] h-[120px] rounded-md ">
                <picture>
                  <img
                    src={Pictutre5}
                    alt={Pictutre5}
                    className="w-[240px] h-[120px] rounded-md"
                  />
                </picture>
              </div>
              <div className="w-[240px] h-[120px] rounded-md ">
                <picture>
                  <img
                    src={Pictutre6}
                    alt={Pictutre6}
                    className="w-[240px] h-[120px] rounded-md"
                  />
                </picture>
              </div>
              <div className="w-[240px] h-[120px] rounded-md ">
                <picture>
                  <img
                    src={Pictutre7}
                    alt={Pictutre7}
                    className="w-[240px] h-[120px] rounded-md"
                  />
                </picture>
              </div>
              <div className="w-[240px] h-[120px] rounded-md ">
                <picture>
                  <img
                    src={Pictutre8}
                    alt={Pictutre8}
                    className="w-[240px] h-[120px] rounded-md"
                  />
                </picture>
              </div>
              <div className="w-[240px] h-[120px] rounded-md ">
                <picture>
                  <img
                    src={Pictutre9}
                    alt={Pictutre9}
                    className="w-[240px] h-[120px] rounded-md"
                  />
                </picture>
              </div>
              <div className="w-[240px] h-[120px] rounded-md ">
                <picture>
                  <img
                    src={Pictutre10}
                    alt={Pictutre10}
                    className="w-[240px] h-[120px] rounded-md"
                  />
                </picture>
              </div>
              <div className="w-[240px] h-[120px] rounded-md ">
                <picture>
                  <img
                    src={Pictutre5}
                    alt={Pictutre5}
                    className="w-[240px] h-[120px] rounded-md"
                  />
                </picture>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlickSlider;
