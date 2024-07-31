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
  FaChevronLeft,
} from "react-icons/fa";
import "../App.css";
import { Link } from "react-router-dom";

const sidebar = ({ setIsSideOpen, isSideOpen }) => {
  return (
    <div className="h-screen sticky top-0 flex flex-col">
      <div className="h-16"></div>

      <nav className="shadow-md border-r border-gray-300 w-48 h-full bg-white z-10">
        <div
          onClick={() => {
            setIsSideOpen((prev) => !prev);
          }}
          className="w-6 h-6 text-sm bg-white absolute -right-3 top-96 input-entry flex  justify-center items-center cursor-pointer"
        >
          <FaChevronLeft />
        </div>

        <Link
          to={"/"}
          className="flex gap-2 items-center py-4 bg-gray-200 w-full cursor-pointer"
        >
          <FaClock className="text-gray-500 text-xl ml-5" />
          <p className="text-base">TIME TRACKER</p>
        </Link>

        <Link
          to={"/calender"}
          className="flex gap-2 items-center py-3 w-full hover:bg-gray-200 transition cursor-pointer"
        >
          <FaCalendar className="text-gray-500 text-xl ml-5" />
          <p className="text-base">CALENDER</p>
        </Link>

        <p className="ml-5 my-4 text-gray-600">ANALYZE</p>

        <Link
          to={"/dashboard"}
          className="flex gap-2 items-center py-3 w-full hover:bg-gray-200 transition cursor-pointer"
        >
          <FaCheckSquare className="text-gray-500 text-xl ml-5" />
          <p className="text-base">DASHBOARD</p>
        </Link>

        <Link
          to={"/reports"}
          className="flex gap-2 items-center py-3 w-full hover:bg-gray-200 transition cursor-pointer"
        >
          <FaBook className="text-gray-500 text-xl ml-5" />
          <p className="text-base">REPORTS</p>
        </Link>

        <p className="ml-5 my-4 text-gray-600">MANAGE</p>

        <Link
          to={"/projects"}
          className="flex gap-2 items-center py-3 w-full hover:bg-gray-200 transition cursor-pointer"
        >
          <FaProjectDiagram className="text-gray-500 text-xl ml-5" />
          <p className="text-base">PROJECTS</p>
        </Link>
        <Link
          to={"/tags"}
          className="flex gap-2 items-center py-3 w-full hover:bg-gray-200 transition cursor-pointer"
        >
          <FaTag className="text-gray-500 text-xl ml-5" />
          <p className="text-base">TAGS</p>
        </Link>
        <Link
          to={"/team"}
          className="flex gap-2 items-center py-3 w-full hover:bg-gray-200 transition cursor-pointer"
        >
          <FaUsers className="text-gray-500 text-xl ml-5" />
          <p className="text-base">TEAM</p>
        </Link>
        <Link
          to={"/clients"}
          className="flex gap-2 items-center py-3 w-full hover:bg-gray-200 transition cursor-pointer"
        >
          <FaUserAlt className="text-gray-500 text-xl ml-5" />
          <p className="text-base">CLIENTS</p>
        </Link>
      </nav>
    </div>
  );
};

export default sidebar;
