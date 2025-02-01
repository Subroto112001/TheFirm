import React from 'react'
import PerfectLeft from "../assets/PerfectLeft.png";
import OurHeading from './CommonComponent/OurHeading';
import Button from './CommonComponent/Button';
const PerfectSolution = () => {
  return (
    <>
      <div className="containers">
        <div className="MainWrapper pb-[100px] flex items-center justify-center gap-x-[160px]">
          <div className="left">
            <picture>
              <img src={PerfectLeft} alt={PerfectLeft} className="" />
            </picture>
          </div>
          <div className="right max-w-[464px]">
            <OurHeading
              StyleName={
                " font-Nunito font-black text-[44px] text-blackcolorText"
              }
              titlecontent={"Perfect Solution for Your"}
              lastcontent={"Bussiness"}
            />
            <p className="text-[18px] text-blackcolorText font-normal mt-[18px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
            <Button
              btnContent="Read More"
              btnDesign={
                "w-[157px]  font-Nunito font-bold text-[18px] text-white  rounded-md pt-[9px] pb-[9px] pl-[21px] pr-[21px] bg-yellowcolor mt-[20px]"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PerfectSolution