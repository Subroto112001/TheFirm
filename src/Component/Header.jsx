import React from 'react'
import Logo from "../assets/Logo.png"
import Button from './CommonComponent/Button'
const Header = () => {
    const menuitem = [
        {
            id: 1,
            name : "home"
         },
        {
            id: 2,
            name : "About"
         },
        {
            id: 3,
            name : "Menu"
         },
        {
            id: 4,
            name : "Blog"
         },
        {
            id: 5,
            name : "FAQ"
         }
    ]
  return (
    <>
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="mt-[24px]">
            <picture>
              <img src={Logo} alt="Logo" />
            </picture>
          </div>
          <div className="mt-[24px] flex gap-[50px]">
            <ul className=" flex items-center gap-6">
              {menuitem.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href="#"
                      className="menuitems font-Nunito text-blackcolorText font-bold text-[18px] capitalize"
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
            <Button
              btnContent="Get In Touch"
              btnDesign={
                "font-Nunito font-bold text-[18px] text-white  rounded-md pt-[9px] pb-[9px] pl-[21px] pr-[21px] bg-yellowcolor"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header