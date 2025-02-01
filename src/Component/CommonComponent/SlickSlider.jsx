import React from 'react'
import Slider from "react-slick";
import StockImage from './StockImage.jpg'
import StockImage2 from "./StockImage2.jpg";
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
              color: '#fff',
              position: "absolute",
              top: "5%",
        left: "px",
            background: "red",
        
            width: "40px",
            height: "40px",
            borderRadius : '50%',
              display: 'flex',
              justifyContent: 'center',
           alignItems: ' center'
          
          }}
          onClick={onClick}
        >
          <MdNavigateNext />
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
            left: "-40px",

            background: "green",

            width: "40px",
            height: "40px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
              alignItems: " center",
            zIndex: '3'
          }}
          onClick={onClick}
        >
          <GrFormPrevious />
        </div>
      );
    }
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
  return (
    <>
      {" "}
      <div className="containers">
        <div className="wrapper flex justify-center items-center pt-[100px] pb-[100px]">
          <div className="slider-container w-[200px] h-[200px] ">
            <Slider {...settings}>
              <div className="w-[200px] h-[200px]">
                <picture>
                  <img
                    src={StockImage}
                    alt={StockImage}
                    className="w-[200px] h-[200px]"
                  />
                </picture>
              </div>
              <div>
                <picture>
                  <img
                    src={StockImage2}
                    alt={StockImage2}
                    className="w-[200px] h-[200px]"
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