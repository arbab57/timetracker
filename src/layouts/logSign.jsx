import React from "react";
import { Outlet } from "react-router-dom";
import { FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import UseAccessToken from "../components/hooks/useAccessToken";

const logSign = ({ link }) => {
  // const accessToken = UseAccessToken();
  return (
    <>
      <header className="lg:px-48 sm:px-20 px-8 py-4 flex justify-between items-center fixed top-0 w-screen">
        <div className="flex items-center gap-1 ">
          <FaClock className="text-2xl text-blue-500" />
          <p className="font-bold text-2xl">ClockIt</p>
        </div>

        <div
          className="flex gap-3
        "
        >
          <Link
            to={"/users/login"}
            className="font-bold text-blue-500 flex justify-between items-center"
          >
            Log In
          </Link>
          <span>/</span>
          <Link
            to={"/users/signup"}
            className="font-bold text-blue-500 flex justify-between items-center"
            href=""
          >
            Sign Up
          </Link>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default logSign;
