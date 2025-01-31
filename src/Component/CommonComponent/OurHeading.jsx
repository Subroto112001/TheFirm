import React from 'react'

const OurHeading = ({ StyleName, titlecontent, lastcontent }) => {
  return (
    <>
      <div className="container">
        <h1 className={StyleName}>
                  {titlecontent} <span className="OurHeader">{lastcontent}</span>
        </h1>
      </div>
    </>
  );
};

export default OurHeading