import React from 'react'
import Button from './CommonComponent/Button';
import BannerUpper from'../assets/BannerUpper.png'
const Banner = () => {
  return (
    <div className="bg-bannerBackImage bg-cover bg-center bg-no-repeat relative z-10 after:top-0 after:left-0 after:absolute after:content-[''] after:w-full after:h-full after:bg-[#f9fafaee] after:-z-10">
      <div className="container">
        <div className="pt-[170px] pb-[170px] flex relative">
          <div className="w-[60%] flex flex-col gap-y-[30px] z-10">
            <h1 className="text-[48px] font-black leading-[133.4%] font-Nunito">
              Get Bussiness <br /> Solutions with{" "}
              <span className="text-[52px]">TheFirm</span>
            </h1>
            <p className="text-[18px] font-normal leading-[176%] max-w-[437px] tracking-[2%]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy.
            </p>
            <Button
              btnContent="Get In Touch"
              btnDesign={
                "w-[157px]  font-Nunito font-bold text-[18px] text-white  rounded-md pt-[9px] pb-[9px] pl-[21px] pr-[21px] bg-yellowcolor"
              }
            />
          </div>
          <div className="absolute h-full w-[852px] right-[-115px] top-0 z-[1]">
            <picture>
              <img
                className="w-full h-full object-cover "
                src={BannerUpper}
                alt={BannerUpper}
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner 