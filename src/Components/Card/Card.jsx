import React from "react";
import "./card.css";
import Images from "../Images/Images";
import Tittle from "../Tittle/Tittle";

const Card = (props) => {
  return (
    <>
      <div className="cards">
        <div className="card">
          <Images imgsrc={props.imgsrc} />
          <div className="card_info">
            <span className="card_category">{props.category}</span>
            <Tittle title={props.title} />
            <a href={props.link} target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
