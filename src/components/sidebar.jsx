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
import { NavLink } from "react-router-dom";

const sidebar = ({ setIsSideOpen, isSideOpen }) => {
  const linkClass = ({ isActive }) => {
    return isActive
      ? "flex gap-2 items-center py-3 w-full bg-gray-200 transition cursor-pointer"
      : "flex gap-2 items-center py-3 w-full hover:bg-gray-200 transition cursor-pointer";
  };

  return (
    <div className="h-screen sticky top-0 flex flex-col">
      <div className="h-70px"></div>

      <nav className="shadow-md border-r border-gray-300 w-48 h-full bg-white z-10">
        <div
          onClick={() => {
            setIsSideOpen((prev) => !prev);
          }}
          className="w-6 h-6 text-sm bg-white absolute -right-3 top-96 input-entry flex  justify-center items-center cursor-pointer"
        >
          <FaChevronLeft />
        </div>

        <NavLink to={"/"} className={linkClass}>
          <FaClock className="text-gray-500 text-xl ml-5" />
          <p className="text-base">TIME TRACKER</p>
        </NavLink>

        <NavLink to={"/calender"} className={linkClass}>
          <FaCalendar className="text-gray-500 text-xl ml-5" />
          <p className="text-base">CALENDER</p>
        </NavLink>

        <p className="ml-5 my-4 text-gray-600">ANALYZE</p>

        <NavLink to={"/dashboard"} className={linkClass}>
          <FaCheckSquare className="text-gray-500 text-xl ml-5" />
          <p className="text-base">DASHBOARD</p>
        </NavLink>

        <NavLink to={"/reports"} className={linkClass}>
          <FaBook className="text-gray-500 text-xl ml-5" />
          <p className="text-base">REPORTS</p>
        </NavLink>

        <p className="ml-5 my-4 text-gray-600">MANAGE</p>

        <NavLink to={"/projects"} className={linkClass}>
          <FaProjectDiagram className="text-gray-500 text-xl ml-5" />
          <p className="text-base">PROJECTS</p>
        </NavLink>
        <NavLink to={"/tags"} className={linkClass}>
          <FaTag className="text-gray-500 text-xl ml-5" />
          <p className="text-base">TAGS</p>
        </NavLink>
        <NavLink to={"/team"} className={linkClass}>
          <FaUsers className="text-gray-500 text-xl ml-5" />
          <p className="text-base">TEAM</p>
        </NavLink>
        <NavLink to={"/clients"} className={linkClass}>
          <FaUserAlt className="text-gray-500 text-xl ml-5" />
          <p className="text-base">CLIENTS</p>
        </NavLink>
      </nav>
    </div>
  );
};

export default sidebar;
