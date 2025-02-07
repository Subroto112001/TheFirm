import React from 'react'
import OurHeading from './CommonComponent/OurHeading'
import Card from './CommonComponent/Card';
import Image from "../assets/Card1.png";
import Image2 from "../assets/Card2.png";
import Image3 from "../assets/Card3.png";
const Ourblogs = () => {
  return (
    <>
      <div className="containers">
        <OurHeading
          StyleName={
            " text-center font-Nunito font-black text-[44px] text-blackcolorText"
          }
          titlecontent={"Our"}
          lastcontent={"Blogs"}
        />
        <div className="flex justify-center items-center gap-x-[82px]">
          <Card Imageeliment={Image}></Card>
          <Card Imageeliment={Image2}></Card>
          <Card Imageeliment={Image3}></Card>
        </div>
      </div>
    </>
  );
}

export default Ourblogs