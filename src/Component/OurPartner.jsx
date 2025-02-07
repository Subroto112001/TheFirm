import React from 'react'
import Header from './CommonComponent/OurHeading'
import Partner from "./PartnerArea"
const OurPartner = () => {
  return (
    <>
      <div className="containers">
        <div className="flex flex-col justify-center items-center gap-y-4">
          <Header
            StyleName={
              " text-center font-Nunito font-black text-[44px] text-blackcolorText"
            }
            titlecontent={"Our"}
            lastcontent={"Partner"}
          />
          <Partner/>
        </div>
      </div>
    </>
  );
}

export default OurPartner