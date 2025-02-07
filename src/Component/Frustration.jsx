import React from "react";
import OurHeading from "./CommonComponent/OurHeading";
import { FaQuestion } from "react-icons/fa";
import Right from '../assets/Right.png'
const Frustration = () => {
   const menuitem = [
     {
       id: 1,
       name: "Loren rasion gravida auem is bibenua tase",
     },
     {
       id: 2,
       name: "Lorem Ipsum is simply dummy text of the.",
     },
     {
       id: 3,
       name: "Printing and typesetting industry. Lorem Ipsum",
     },
     {
       id: 4,
       name: `When an unknown printer took a galley of type and scrambled it`,
     },
   ];
  return (
    <>
      <div className="containers">
        <div className="pt-24 pb-96 flex items-center justify-center">
          <div className="left max-w-[583px]">
            <OurHeading
              StyleName={
                " font-Nunito font-black text-[44px] text-blackcolorText"
              }
              titlecontent={"Frustration of"}
              lastcontent={"Clients"}
            />
            <p className="text-[18px] text-blackcolorText leading-[176%] font-normal mt-[22px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <ul className=" flex flex-col mt-[26px]">
              {menuitem.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="flex items-center text-[18px] font-normal"
                  >
                    <span className="text-yellow-400 ">
                      <FaQuestion />
                    </span>{" "}
                    &nbsp; {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="right">
            <picture>
              <img src={Right} alt={Right} />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
};

export default Frustration;
