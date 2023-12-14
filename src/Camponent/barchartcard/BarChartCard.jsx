import React from "react";
import "./barchart.scss";
import BarChart from "../../assets/BarChart.webp";
import Checkmark from "../../assets/Checkmark.webp";
import DropDownIcon from "../../assets/DropDownIcon.webp";

const BarChartCard = () => {
  return (
    <div className="barbellCardConteiner">
      <div className="barbellIconCard">
        <div className="icon">
          <img src={BarChart} alt="BarChart" />
        </div>
        <div className="barsaveIcon">
          <img src={Checkmark} alt="Checkmark" />
        </div>
      </div>
      <div className="barbellIconContent">
        <p>Notify me when any wallets move more than</p>
        <div className="bardropDown">
          <img src={DropDownIcon} alt="DropDownIcon" />
        </div>
      </div>
    </div>
  );
};

export default BarChartCard;
