import React from "react";
import {
  FaBars,
  FaClock,
  FaBell,
  FaQuestionCircle,
  FaUser,
} from "react-icons/fa";

const header = () => {
  return (
    <header className="flex justify-between items-center border-b border-gray-300 sm:px-5 px-2 py-2 h-16 fixed top-0 z-20 bg-white shadow-sm w-full">
      <div className="flex sm:justify-start justify-between items-center sm:gap-7 gap-2 w-full">
        <div className="flex items-center gap-2">
          <FaBars className="text-2xl" />
          <div className="flex items-center gap-1 ">
            <FaClock className="text-2xl text-blue-500" />
            <p className="font-bold text-2xl">ClockIt</p>
          </div>
        </div>

        <div className=" sm:flex hidden items-center h-10">
          <p className="font-medium text-gray-500">Arbabbashir30's workspace</p>
        </div>

        <div className="sm:hidden">
          <div className="border-l border-gray-300 h-10 flex items-center justify-center sm:w-16 w-10">
            <FaUser className="text-2xl text-gray-500" />
          </div>
        </div>
      </div>

      <div className="sm:flex hidden">
        <div className="border-l border-gray-300 h-10 flex items-center justify-center sm:w-16 w-10">
          <FaBell className="text-2xl text-gray-500" />
        </div>
        <div className="border-l border-gray-300 h-10 flex items-center justify-center sm:w-16 w-10">
          <FaQuestionCircle className="text-2xl text-gray-500" />
        </div>
        <div className="border-l border-gray-300 h-10 flex items-center justify-center sm:w-16 w-10">
          <FaUser className="text-2xl text-gray-500" />
        </div>
      </div>

      {/* <div className="md:hidden flex">
        <div className="h-10 flex items-center justify-center w-16">
          <FaUser className="text-2xl text-gray-500" />
        </div>
        <div className="flex items-center justify-center">
          <FaBars className="text-2xl" />
        </div>
        <div className="hidden">
          <div className="border-l border-gray-300 h-10 flex items-center justify-center w-16 ">
            <FaBell className="text-2xl text-gray-500" />
          </div>
          <div className="border-l border-gray-300 h-10 flex items-center justify-center w-16">
            <FaQuestionCircle className="text-2xl text-gray-500" />
          </div>
        </div>
      </div> */}
    </header>
  );
};
export default header;
