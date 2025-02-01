import React from 'react'
import OurHeading from './CommonComponent/OurHeading'
import Slider from "react-slick";
import Windows from "../assets/Windows.png"
import Google from "../assets/Google.png"
import Firefox from "../assets/Firefox.png"
import Safari from "../assets/Safari.png"

const PartnerArea = () => {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
      };
  return (
    <>
      <div className="containers">
        <div className="pt-[100px] pb-[100px]">
          <OurHeading
            StyleName={
              "text-center font-Nunito font-black text-[44px] text-blackcolorText"
            }
            titlecontent={"Our"}
            lastcontent={"Partner"}
          />

          <div className="slider-container items-center justify-center">
            <Slider {...settings}>

              

              <div className="w-28 h-30">
                <picture>
                  <img src={Windows} alt={Windows} />
                </picture>
              </div>
              <div className="w-28 h-30">
                <picture>
                  <img src={Google} alt={Google} />
                </picture>
              </div>
              <div className="w-28 h-30">
                <picture>
                  <img src={Firefox} alt={Firefox} />
                </picture>
              </div>
              <div className="w-28 h-30">
                <picture>
                  <img src={Safari} alt={Safari} />
                </picture>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default PartnerArea