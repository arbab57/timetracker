import React from "react";
import { time } from "../hooks/time";

const Clock = ({ count, isOn, startClock, stopClock }) => {
  return (
    <>
      <p className="font-medium font-roboto text-2xl border-l border-gray-200 h-12 py-3 w-32 px-3 flex items-center justify-center">
        {time(count)}
      </p>
      {isOn ? (
        <button
          onClick={stopClock}
          className="h-full bg-red-500 text-white text-lg sm:px-10 px-5 sm:w-32 w-24  hover:scale-105 transition"
        >
          STOP
        </button>
      ) : (
        <button
          onClick={startClock}
          className="h-full bg-blue-500  text-white text-lg sm:px-10 px-5 sm:w-32 w-24 hover:scale-105 transition"
        >
          START
        </button>
      )}
    </>
  );
};

export default Clock;
