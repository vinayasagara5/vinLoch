import React from "react";
import "./bellcard.scss";
import BellThree from "../../assets/BellThree.webp";

const BellCard = () => {
  return (
    <div className="bellCardConteiner">
      <div className="bellIconCard">
        <div className="icon">
          <img src={BellThree} alt="BellThree" />
        </div>
        <div className="saveIcon">Save</div>
      </div>
      <div className="bellIconContent">
        We’ll be sending notifications to you here
      </div>
      <div className="bellIconInput"></div>
    </div>
  );
};

export default BellCard;
