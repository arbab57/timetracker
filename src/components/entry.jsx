import React from "react";
import { FaPlus, FaTag, FaPlay, FaPlusCircle } from "react-icons/fa";
import AddProjectBtn from "./addProjectBtn";

const entry = ({ task }) => {
  return (
    <div className="flex lg:flex-row flex-col gap-2 lg:gap-0 py-1 sm:px-6 px-3  bg-white w-full border-b-2 border-gray-300">
      <div className="flex items-center lg:justify-start justify-between gap-2 w-full">
        <input
          defaultValue={task}
          className="h-10 px-1 w-2/5 outline-none focus:border-gray-400 focus:border py-3 font-medium rounded-sm"
          type="text"
        />
        <AddProjectBtn />
      </div>

      <div className="flex sm:flex-row flex-col  justify-between  items-center ">
        <div className="flex w-full justify-between">
          <button className="text-xl text-blue-500 p-3 h-12 sm:w-16 flex items-center justify-center  hover:bg-blue-500 hover:text-white transition border-l border-gray-200">
            <FaTag />
          </button>
          <div className="flex gap-4 items-center border-l border-gray-200 h-12 px-3">
            <input
              className=" outline-none hover:border-gray-400 hover:border p-3  h-11 w-16 font-medium text-gray-500 rounded-sm"
              defaultValue={"5:00"}
              type="text"
            />
            <span>-</span>
            <input
              className="outline-none hover:border-gray-400 hover:border p-3 h-11 w-16 font-medium text-gray-500 rounded-sm"
              defaultValue={"8:00"}
              type="text"
            />
          </div>
        </div>

        <div className="flex justify-between w-full">
          <p className="font-semibold text-xl border-l border-gray-200 h-12 py-3 px-6 flex items-center justify-center">
            00:00:00
          </p>
          <button className="text-xl text-gray-500 hover:text-white h-12 w-16 flex items-center justify-center hover:bg-blue-500 p-3 transition border-l border-gray-200">
            <FaPlay />
          </button>
        </div>
      </div>
    </div>
  );
};

export default entry;
