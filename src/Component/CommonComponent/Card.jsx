import React from 'react'

import Author from '../../assets/Author1.png'
import Butotn from '.././CommonComponent/Button'
const Card = ({Imageeliment, SourceFile}) => {
  return (
    <>
      <div className="pt-2 pb-2 rounded-md pl-[11px] pr-[11px] itemBoder w-[340px] ">
        <picture>
          <img
            src={Imageeliment}
            alt={Imageeliment}
            className="w-[319px] h-[228px]"
          />
        </picture>
        <div className="pl-[21px] pr-[21px]">
          <h1 className=" text-[24px] text-blackcolorText font-Nunito font-bold">
            Lorem, ipsum dolor.
          </h1>
          <p className="text-[17px] max-w-[308px] pb-[28px] borderP font-Lora">
            Lorem Ipsum is simply text of the printing and type setting
            industry. make a type specimen.
          </p>
          <div className="author mt-[20px]">
            <div className="AutorIdenty flex gap-y-[7px]">
              <picture>
                <img src={Author} alt={Author} className="w-30px h-[27.44px]" />
              </picture>
              <h4 className="font-[14px] text-blackcolorText font-Nunito">
                Alex Liones
              </h4>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Butotn
              btnContent="Read More"
              btnDesign={
                "w-[157px]  font-Nunito font-bold text-[18px] text-white  rounded-md pt-[9px] pb-[9px] pl-[21px] pr-[21px] bg-black mt-[21px] hoverClass"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card