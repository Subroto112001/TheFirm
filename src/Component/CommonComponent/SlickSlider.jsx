import React from 'react'
import Slider from "react-slick";
import StockImage from './StockImage.jpg'
import StockImage2 from "./StockImage2.jpg";
import SrockImage3 from "./SrockImage3.jpg";
import { MdNavigateNext } from 'react-icons/md';
import { GrFormPrevious } from 'react-icons/gr';


const SlickSlider = () => {
    function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{
            ...style,
            color: "#fff",
            position: "absolute",
            top: "5%",
            left: "0",

            width: "46px",
            height: "38px",
            borderTopRightRadius: "30px",
            borderBottomRightRadius: "30px",

            display: "flex",
            justifyContent: "center",
            alignItems: " center",
          }}
          onClick={onClick}
        >
          <div className="ItemHandle2 w-full h-full text-white">
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
            top: "5%",
            left: "-46px",

            width: "46px",
            height: "38px",

            zIndex: "3",
          }}
          onClick={onClick}
        >
          <div className=" w-full h-full ItemHandle text-white">
            <GrFormPrevious />
          </div>
        </div>
      );
    }
    const settings = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
  return (
    <>
      {" "}
      <div className="containers">
        <div className="wrapper flex justify-center items-center pt-[100px] pb-[100px] drop-shadow-lg   ">
          <div className="slider-container w-[471px] h-[417px] rounded-md border-8 border-white drop-shadow-md">
            <Slider {...settings}>
              <div className="w-[471px] h-[417px] rounded-md  ">
                <picture>
                  <img
                    src={StockImage}
                    alt={StockImage}
                    className="w-[471px] h-[417px] rounded-md"
                  />
                </picture>
              </div>
              <div className="w-[471px] h-[417px] rounded-md ">
                <picture>
                  <img
                    src={StockImage2}
                    alt={StockImage2}
                    className="w-[471px] h-[417px] rounded-md"
                  />
                </picture>
              </div>
              <div className="w-[471px] h-[417px] rounded-md ">
                <picture>
                  <img
                    src={SrockImage3}
                    alt={SrockImage3}
                    className="w-[471px] h-[417px] rounded-md"
                  />
                </picture>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default SlickSlider