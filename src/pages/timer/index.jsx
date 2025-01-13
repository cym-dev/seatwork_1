import React, { useState } from "react";
import Clock from "./clock";
import List from "./list";
export default function Timer() {
  const [timer, setTimer] = useState({
      hour: 0,
      minute: 0,
      second: 0,
    }),
    [time, setTime] = useState("00:00:00");

  const handleConvertToTime = _timer => {
    let time = { ..._timer };
    if (time.hour < 10) {
      time.hour = `0${time.hour}`;
    }
    if (time.minute < 10) {
      time.minute = `0${time.minute}`;
    }
    if (time.second < 10) {
      time.second = `0${time.second}`;
    }

    return `${time.hour}:${time.minute}:${time.second}`;
  };
  return (
    <div className="container h-screen">
      <div className="flex align-center justify-center h-full">
        <div className="grid grid-rows-3 grid-flow-col gap-4 ">
          <Clock
            timer={timer}
            setTime={setTime}
            time={time}
            setTimer={setTimer}
            handleConvertToTime={handleConvertToTime}
          />
          <List setTimer={setTimer} handleConvertToTime={handleConvertToTime} />
        </div>
      </div>
    </div>
  );
}
