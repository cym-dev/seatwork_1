import React, { useRef, useState } from "react";
import "./style.css";

export default function Clock({
  timer,
  setTimer,
  handleConvertToTime,
  setTime,
  time,
  lastTimer,
  setLastTimer,
}) {
  const [play, setPlay] = useState(false);

  let interval = useRef(null);
  //   useEffect(() => {
  //     const { hour, minute, second } = lastTimer;
  //     if (!play && second === 0 && minute === 0 && hour === 0) {
  //       setTime(handleConvertToTime(timer));
  //       setLastTimer({ ...timer });
  //     }
  //   }, [setTime, timer, play, handleConvertToTime, interval, lastTimer]);

  const handleCustomTime = isAdd => {
    let _timer = { ...timer };
    if (isAdd) {
      _timer = { ...timer, minute: timer.minute + 1 };
    } else {
      _timer = { ...timer, minute: timer.minute - 1 };
    }
    setTimer({ ..._timer });
    setTime(handleConvertToTime(_timer));
    setLastTimer({ ..._timer });
  };
  const handleStart = async () => {
    let _timer = { ...lastTimer };
    setPlay(true);
    interval.current = await setInterval(countDown, 1000);

    function countDown() {
      if (_timer.second === 0) {
        if (_timer.minute === 0) {
          if (_timer.hour === 0) {
            setPlay(false);
            _timer = { ...timer };
            clearInterval(interval.current);
          } else {
            _timer = { hour: _timer.hour - 1, minute: 59, second: 59 };
          }
        } else {
          _timer = { ..._timer, minute: _timer.minute - 1, second: 59 };
        }
      } else {
        _timer = { ..._timer, second: _timer.second - 1 };
      }
      setLastTimer({ ..._timer });

      setTime(handleConvertToTime(_timer));
    }
  };

  const handlePause = () => {
    setPlay(false);
    console.log(interval.current);

    clearInterval(interval.current);
  };
  const handleReset = () => {
    setLastTimer({ ...timer });
    setTime(handleConvertToTime(timer));
    setPlay(false);
  };
  return (
    <div className=" row-span-3 col-span-2 max-w-sm h-fit p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Timer
      </h5>
      <div className="flex justify-between h-full">
        <div className="flex flex-col justify-center">
          <button
            onClick={() => handleCustomTime(false)}
            className="text-xl text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">
            -
          </button>
        </div>

        <div className="flex align-center mx-1 justify-center  bg-gray-100 dark:bg-gray-700 p-4 rounded-full p-[120px] h-[120px] w-[80px] my-10">
          <span className="loading"></span>
          <div className="flex flex-col items-center justify-center">
            <div className="text-5xl flex">
              <span className="digital ">{time}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <button
            onClick={() => handleCustomTime(true)}
            className="text-xl text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">
            +
          </button>
        </div>
      </div>
      <div>
        {!play && (
          <button
            onClick={handleReset}
            className={`ani w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800`}>
            Reset
          </button>
        )}
        <button
          onClick={() => {
            play ? handlePause() : handleStart();
          }}
          className={`w-full text-white ${
            play ? "bg-gray-400" : "bg-blue-700"
          } hover: ${
            play ? "bg-gray-400" : "bg-blue-800"
          }  focus:ring-4 focus: ${
            play ? "ring-gray-300" : "ring-blue-300"
          }  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:${
            play ? "bg-gray-600" : "bg-blue-600"
          } dark:hover:${
            play ? "bg-gray-400" : "bg-blue-300"
          } focus:outline-none dark:focus:${
            play ? "ring-gray-300" : "ring-blue-300"
          }`}>
          {play ? "Pause" : "Start"}
        </button>
      </div>
    </div>
  );
}
