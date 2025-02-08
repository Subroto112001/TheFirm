import React from "react";

import Slider from "react-slick";
import Image1 from "../assets/Unplash1.jpg"
import Image2 from "../assets/Unplash2.jpg"
import Image3 from "../assets/Unplush3.jpg"
import Image4 from "../assets/Unplush4.jpg"
import Image5 from "../assets/Unplush5.jpg"
import Image6 from "../assets/Unplush6.jpg"
const Testimonials = () => {
  const Testim = [
    {
      id: 1,
      sliderimg: Image1,
      sumary:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  type scrambled it to make a type specimen book. It has survived not only five centuries,",
     
    },
    {
      id: 2,
      sliderimg: Image2,
      sumary:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  type scrambled it to make a type specimen book. It has survived not only five centuries,",
         },
    {
      id: 3,
      sliderimg: Image3,
      sumary:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  type scrambled it to make a type specimen book. It has survived not only five centuries,",
    
    },
    {
      id: 4,
      sliderimg: Image4,
      sumary:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  type scrambled it to make a type specimen book. It has survived not only five centuries,",
     
    },
    {
      id: 5,
      sliderimg: Image5,
      sumary:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  type scrambled it to make a type specimen book. It has survived not only five centuries,",
   
    },
    {
      id: 6,
      sliderimg: Image6,
      sumary:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  type scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
  ];
 
 
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
  
    autoplaySpeed: 4000,
    speed: 500,
  };

  return (
    <>
      <section className="pt-[100px] pb-[60px]">
        <div className="container">
          
          <div className="pt-[50px]">
            <div className="slider-container">
              <Slider {...settings}>
                {Testim.map((Testim) => {
                  return (
                    <div key={Testim.id}>
                      <div className="slidercard ">
                        <div className=" sliderImg pt-5">
                          <picture>
                            <img
                              src={Testim.sliderimg}
                              className="w-[146px] h-[146px] rounded-full z-10"
                              alt=""
                            />
                          </picture>
                        </div>
                        <div className="silderContent">
                          <p className="text-[18px] font-Lora font-normal text-font_color leading-[176%] tracking-wide">
                            {Testim.sumary}
                          </p>
                          <h4 className="text-[24px] font-bold font-Nunito text-[#1e1e1e] pt-7">
                            {Testim.sliderIName}{" "}
                            <span className="text-[18px] font-normal font-Lora text-[#1e1e1e]">
                              {Testim.sliderSpan}
                            </span>
                          </h4>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
