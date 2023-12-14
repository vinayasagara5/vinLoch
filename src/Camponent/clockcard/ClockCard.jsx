import React from "react";
import "./clockCard.scss";
import Clock from "../../assets/Clock.webp";
import Checkmark from "../../assets/Checkmark.webp";
import ArrowDropDown from "../../assets/ArrowDropDown.webp";

const ClockCard = () => {
  return (
    <div className="clockbellCardConteiner">
      <div className="clockbellIconCard">
        <div className="icon">
          <img src={Clock} alt="Clock" />
        </div>
        <div className="clocksaveIcon">
          <img src={Checkmark} alt="Checkmark" />
        </div>
      </div>
      <div className="clockbellIconContent">
        <p>Notify me when any wallet dormant for</p>
        <div className="clockdropDown">
          <img src={ArrowDropDown} alt="ArrowDropDown" />
        </div>
        <p>becomes active</p>
      </div>
    </div>
  );
};

export default ClockCard;
