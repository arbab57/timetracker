import React from "react";
import { FaTag } from "react-icons/fa";
import AddProjectBtn from "./addProjectBtn";

const addEntry = ({ isSideOpen }) => {
  let x = isSideOpen ? "w-48 h-1" : "w-16 h-1";
  let x2 = isSideOpen
    ? "w-full px-9 sticky top-24"
    : "w-full px-5 sticky top-24";

  return (
    <div className={x2}>
      <div className="flex justify-between lg:flex-row flex-col py-2 px-3 input-entry bg-white">
        <div className="flex items-center justify-between lg:justify-start gap-2 w-full">
          <input
            placeholder="What are you working on?"
            className="h-10 px-4 w-3/5 outline-none focus:border-gray-400 focus:border py-3 rounded-sm"
            type="text"
          />
          <AddProjectBtn />
        </div>

        <div className="flex items-center justify-between">
          <button className="text-xl text-blue-500 border-l border-gray-200 p-3 h-12 w-16 flex items-center justify-center hover:bg-blue-500 hover:text-white transition">
            <FaTag />
          </button>
          <p className="font-semibold text-2xl border-l border-gray-200 h-12 py-3 px-7 flex items-center">
            00:00:00
          </p>
          <button className="h-full bg-blue-500 text-white text-lg px-10 hover:scale-105 transition">
            START
          </button>
        </div>
      </div>
    </div>
  );
};

export default addEntry;
