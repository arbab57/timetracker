import React, { useState } from "react";
import {
  FaClock,
  FaCheckSquare,
  FaCalendar,
  FaBook,
  FaUsers,
  FaTag,
  FaProjectDiagram,
  FaUserAlt,
  FaChevronRight,
} from "react-icons/fa";

const ShortSideBar = ({ setIsSideOpen }) => {
  return (
    <div className="h-screen w-0 sticky top-0 flex flex-col">
      <div className="h-70px"></div>
      <nav className="shadow-md border-r border-gray-300 h-screen sticky top-16 bg-white z-10">
        <div
          onClick={() => {
            setIsSideOpen((prev) => !prev);
          }}
          className="w-6 h-6 text-sm bg-white absolute -right-5 top-72 input-entry flex  justify-center items-center cursor-pointer"
        >
          <FaChevronRight />
        </div>

        <div className="flex gap-2 items-center py-4 bg-gray-200 w-full cursor-pointer">
          <FaClock className="text-gray-500 text-xl ml-5" />
        </div>

        <div className="flex gap-2 items-center py-4 w-full hover:bg-gray-200 transition cursor-pointer">
          <FaCalendar className="text-gray-500 text-xl ml-5" />
        </div>

        <div className="flex gap-2 items-center py-4 w-full hover:bg-gray-200 transition cursor-pointer">
          <FaCheckSquare className="text-gray-500 text-xl ml-5" />
        </div>

        <div className="flex gap-2 items-center py-4 w-full hover:bg-gray-200 transition cursor-pointer">
          <FaBook className="text-gray-500 text-xl ml-5" />
        </div>

        <div className="flex gap-2 items-center py-4 w-full hover:bg-gray-200 transition cursor-pointer">
          <FaProjectDiagram className="text-gray-500 text-xl ml-5" />
        </div>
        <div className="flex gap-2 items-center py-4 w-full hover:bg-gray-200 transition cursor-pointer">
          <FaTag className="text-gray-500 text-xl ml-5" />
        </div>
        <div className="flex gap-2 items-center py-4 w-full hover:bg-gray-200 transition cursor-pointer">
          <FaUsers className="text-gray-500 text-xl ml-5" />
        </div>
        <div className="flex gap-2 items-center py-4 w-full hover:bg-gray-200 transition cursor-pointer">
          <FaUserAlt className="text-gray-500 text-xl ml-5" />
        </div>
      </nav>
    </div>
  );
};

export default ShortSideBar;
