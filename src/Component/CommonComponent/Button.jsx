import React from 'react'

const Button = ({ btnContent, btnDesign }) => {
  return (
    <>
      <button className={btnDesign} >{btnContent || "Nothing"}</button>
    </>
  );
};

export default Button;