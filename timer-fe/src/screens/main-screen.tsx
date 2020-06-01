import React, { useReducer } from "react";

import TotalTimer from "../components/total-timer";
import Timer from "../components/timer";

import {
  INCREMENT,
  Action,
  DECREMENT,
  FORMAT_ONE,
  FORMAT_TWO,
} from "../utility/utility";

import "./main-screen.scss";

interface MainScreenProps {
  user: any;
}
interface StateObject {
  totalTime: number;
}

const initialState = { totalTime: 0 };

function reducer({ totalTime }: StateObject, { type, value }: Action) {
  switch (type) {
    case INCREMENT:
      return { totalTime: totalTime + value };
    case DECREMENT:
      return { totalTime: totalTime - value };
    default:
      return { totalTime };
  }
}

const MainScreen = ({ user }: MainScreenProps) => {
  console.log("user", user);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className='mainContainer'>
      <p>{"Hello " + user}</p>
      <h2>Timer</h2>
      <div className='col-md-6 col-xs-12 container'>
        <div className='totalTimerContainer'>
          <TotalTimer
            title='Total Timer'
            totalTime={state.totalTime}
            displayFormat={FORMAT_ONE}
          />
        </div>
        <div className='timersContainer'>
          <Timer
            title='Timer 1'
            incrementValue={10}
            displayFormat={FORMAT_TWO}
            totalTimeSetter={dispatch}
          />
          <Timer
            title='Timer 2'
            incrementValue={1}
            displayFormat={FORMAT_ONE}
            totalTimeSetter={dispatch}
          />
          <Timer
            title='Timer 3'
            incrementValue={0.1}
            displayFormat={FORMAT_ONE}
            totalTimeSetter={dispatch}
          />
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
