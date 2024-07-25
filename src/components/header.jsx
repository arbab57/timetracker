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
    <header className="flex justify-between items-center border-b border-gray-300 px-5 py-2 h-16 fixed top-0 z-20 bg-white shadow-sm w-full">
      <div className="flex items-center gap-7">
        <FaBars className="text-2xl" />
        <div className="flex items-center gap-1 ">
          <FaClock className="text-2xl text-blue-500" />
          <p className="font-bold text-2xl">ClockIt</p>
        </div>
        {/* border-l border-gray-200 */}
        <div className=" flex items-center h-10">
          <p className="font-medium text-gray-500">Arbabbashir30's workspace</p>
        </div>
      </div>

      <div className="flex">
        <div className="border-l border-gray-300 h-10 flex items-center justify-center w-16">
          <FaBell className="text-2xl text-gray-500" />
        </div>
        <div className="border-l border-gray-300 h-10 flex items-center justify-center w-16">
          <FaQuestionCircle className="text-2xl text-gray-500" />
        </div>
        <div className="border-l border-gray-300 h-10 flex items-center justify-center w-16">
          <FaUser className="text-2xl text-gray-500" />
        </div>
      </div>
    </header>
  );
};
export default header;
