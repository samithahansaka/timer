import React from "react";

import { convertTimeToDisplay } from "../utility/utility";

import "./total-timer.scss";
interface TotalTimerProps {
  title: string;
  totalTime: number;
  displayFormat: string;
}

const TotalTimer = ({ title, totalTime, displayFormat }: TotalTimerProps) => {
  return (
    <div className='totalContainer'>
      <h3>{title}</h3>
      <p>{convertTimeToDisplay(totalTime, displayFormat)}</p>
    </div>
  );
};

export default TotalTimer;
