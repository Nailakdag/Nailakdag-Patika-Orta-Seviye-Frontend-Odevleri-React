import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useSelector } from "react-redux";

const Timer = () => {
  const { time, start, timerKey } = useSelector((state) => state.apps);
  const renderTime = ({ remainingTime }) => {
    return (
      <div className="timer">
        <span>{remainingTime}</span>
      </div>
    );
  };

  return (
    <CountdownCircleTimer
      key={timerKey}
      isPlaying={start === true ? true : false}
      duration={time}
      colors={["#fb1302", "#05aef9", "#fe0404", "#fe0404"]}
      colorsTime={[7, 5, 2, 0]}
      size={30}
      strokeWidth={2}
      trailStrokeWidth={2}
    >
      {renderTime}
    </CountdownCircleTimer>
  );
};

export default Timer;
