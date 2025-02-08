import React from 'react'
import Picture from '../assets/Band.png'
import OurHeading from './CommonComponent/OurHeading';
import Mike from '../assets/Mike.png'
import Button from "../Component/CommonComponent/Button"
const Branding = () => {
  return (
    <>
      <div className="containers ">
        <div className="bg-[#f2f2f2b9] rounded-2xl ">
          <div className="Banding flex gap-x-[139px] rounded-md p-[50px]">
            <div className="left">
              <picture>
                <img
                  src={Picture}
                  alt={Picture}
                  className="w-[550px] h-[280px]"
                />
              </picture>
            </div>
            <div className="right relative">
              <OurHeading
                StyleName={
                  "  font-Nunito font-black text-[30px] text-blackcolorText"
                }
                titlecontent={""}
                lastcontent={"Branding"}
              />

              <picture>
                <img
                  src={Mike}
                  alt={Mike}
                  className="w-[66px] h-[66px] absolute top-[-9px] left-[-84px]"
                />
              </picture>

              <p className="text-[18px] font-normal text-blackcolorText  w-[505px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type
              </p>
              <Button
                btnContent="Read More"
                btnDesign={
                  "w-[157px]  font-Nunito font-bold text-[18px] text-white  rounded-md pt-[9px] pb-[9px] pl-[21px] pr-[21px] bg-black mt-[20px]"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Branding