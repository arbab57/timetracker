import React from "react";
import { FaClock } from "react-icons/fa";
import header from "../components/header";
import InputForm from "../components/inputForm";

const login = () => {
  return (
    <>
      <header className="lg:px-48 sm:px-20 px-8 py-4 flex justify-between items-center fixed top-0 w-screen">
        <div className="flex items-center gap-1 ">
          <FaClock className="text-2xl text-blue-500" />
          <p className="font-bold text-2xl">ClockIt</p>
        </div>

        <div>
          <a
            className="font-bold text-blue-500 flex justify-between items-center"
            href=""
          >
            Sign Up
          </a>
        </div>
      </header>

      <InputForm form={"Log In"} />
    </>
  );
};

export default login;
