import React, { useState, useEffect, Dispatch } from "react";
import { Button } from "react-bootstrap";

import {
  INCREMENT,
  DECREMENT,
  Action,
  convertTimeToDisplay,
} from "../utility/utility";

import "./timer.scss";

interface TimerProps {
  title: string;
  incrementValue: number;
  displayFormat: string;
  totalTimeSetter: Dispatch<Action>;
}

const Timer = ({
  title,
  incrementValue,
  displayFormat,
  totalTimeSetter,
}: TimerProps) => {
  const [modifiedIncrementValue, setModifiedIncrementValue] = useState(
    incrementValue
  );
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    totalTimeSetter({ type: DECREMENT, value: seconds });
    setSeconds(0);
    setIsActive(false);
  }

  function faster() {
    setModifiedIncrementValue(incrementValue / 10);
  }

  useEffect(() => {
    console.log("Timer running");
    let interval: any = 0;
    if (isActive) {
      interval = setInterval(() => {
        totalTimeSetter({ type: INCREMENT, value: modifiedIncrementValue });
        setSeconds((seconds) => seconds + modifiedIncrementValue);
      }, modifiedIncrementValue * 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, modifiedIncrementValue]);

  return (
    <div className='timerContainer'>
      <h5 className='title'>{title}</h5>
      <div className='time'>{convertTimeToDisplay(seconds, displayFormat)}</div>
      <div className='buttonContainer'>
        <div className='button'>
          <Button onClick={toggle}>{isActive ? "Pause" : "Start"}</Button>
        </div>
        <div>
          <Button onClick={reset}>Reset</Button>
        </div>
        <div className='button'>
          <Button onClick={faster}>Faster</Button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
