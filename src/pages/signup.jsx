import React from "react";
import InputForm from "../components/inputForm";

const signup = () => {
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
            Log In
          </a>
        </div>
      </header>
      <InputForm form={"Sign Up"} />
    </>
  );
};

export default signup;
