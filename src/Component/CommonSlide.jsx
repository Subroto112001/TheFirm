import React from 'react'
import Sldier from "./Silder"
import OurHeading from './CommonComponent/OurHeading';
const CommonSlide = () => {
  return (
    <>
      <div className="containers">
        <div className="pt-[100px] pb-10">
          <OurHeading
            StyleName={
              " text-center font-Nunito font-black text-[44px] text-blackcolorText"
            }
            titlecontent={"Our"}
            lastcontent={"Tetstimonials"}
          />

          <Sldier />
        </div>
      </div>
    </>
  );
}

export default CommonSlide