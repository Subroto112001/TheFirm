import React from "react";
import OurHeading from "./CommonComponent/OurHeading";
import Button from "./CommonComponent/Button";


import StockImage from '../assets/StockImage.jpg'

const OurReasearc = () => {

  return (
    <>
      <div className="containers">
        <div className="flex flex-col justify-center items-center">
          <OurHeading
            StyleName={
              " text-center font-Nunito font-black text-[44px] text-blackcolorText"
            }
            titlecontent={"Our Research & Case"}
            lastcontent={"Studies"}
          />
          <p className="max-w-[864px] text-center text-[18px] text-blackcolorText">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>

          <div className="Wrapper flex justify-center items-center gap-x-[100px]">
            <div className="Left w-[547px]">
              <h1 className="text-[30px] text-blackcolorText font-bold">
                Lorem Ipsum is simply
              </h1>
              <p className="max-w-[547px] tetx-[18ipx] font-normal text-blackcolorText mt-[13px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took.
              </p>
              <Button
                btnContent="Read More"
                btnDesign={
                  "w-[157px]  font-Nunito font-bold text-[18px] text-white  rounded-md pt-[9px] pb-[9px] pl-[21px] pr-[21px] bg-yellowcolor mt-[21px]"
                }
              />
            </div>
            <div className="Right">
              
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurReasearc;
