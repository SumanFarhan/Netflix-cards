import React from "react";
import "./index.css";

const Images = (props) => {
  return (
    <>
      <img src={props.imgsrc} alt="pic" className="card_img" />
    </>
  );
};

export default Images;
