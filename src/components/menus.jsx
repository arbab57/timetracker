import React from "react";
import { FaBell, FaQuestionCircle, FaUser } from "react-icons/fa";
import HoverIcon from "./hoverIcon";

const menus = () => {
  return (
    <div className="sm:flex hidden">
      <div className="border-l border-gray-300 h-10 flex items-center justify-center sm:w-16 w-10">
        <HoverIcon icon={<FaBell className="text-2xl text-gray-500" />} />
      </div>
      <div className="border-l border-gray-300 h-10 flex items-center justify-center sm:w-16 w-10">
        <HoverIcon
          icon={<FaQuestionCircle className="text-2xl text-gray-500" />}
        />
      </div>
      <div className="border-l border-gray-300 h-10 flex items-center justify-center sm:w-16 w-10">
        <HoverIcon icon={<FaUser className="text-2xl text-gray-500" />} />
      </div>
    </div>
  );
};

export default menus;
