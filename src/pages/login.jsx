import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import Toast from "../components/general/toast";
import postData from "../components/hooks/postData";
import UseAccessToken from "../components/hooks/useAccessToken";

const login = () => {
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigateTo = useNavigate();
  const loginAPI = import.meta.env.VITE_login_api_key;

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      return;
    }
    const confirm = async () => {
      const res = await fetch("http://localhost:8000/users/check", {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authentication: `Bearer ${accessToken}`,
        },
      });
      const msg = await res.json();

      if (res.status !== 200) {
        navigateTo("/users/login", { replace: true });
        return;
      }

      navigateTo("/");
    };
    confirm();
  }, []);

  const handleSubmit = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (email == "") {
      setError("please enter your email");
      setShowToast(true);
      return;
    }
    if (password == "") {
      setError("please enter your password");
      setShowToast(true);
      return;
    }
    sendData(email, password);
  };

  const sendData = async (email, password) => {
    const data = { email: email, password: password };
    const response = await postData(loginAPI, data);
    if (response.status !== 200) {
      const message = await response.json();
      setError(message.message);
      setShowToast(true);
      return;
    }
    const access = await response.json();
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.setItem("accessToken", access.accessToken);
    localStorage.setItem("refreshToken", access.refreshToken);
    navigateTo("/", { replace: true });
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center h-screen ">
      {showToast && (
        <Toast message={error} severity="danger" onClose={setShowToast} />
      )}
      <div className="text-center">
        <h2 className="text-5xl font-bold">Get Started with ClockIt</h2>
        <p className="text-gray-400 text-lg mt-4">
          Log in with your credentials to get started
        </p>
      </div>

      <div className="bg-white input-entry p-7 outline-none flex flex-col log-sign-con rounded-sm">
        <h2 className="font-medium text-lg text-center mb-6">Log In</h2>
        <input
          ref={emailRef}
          placeholder="Enter Email"
          className="w-full border border-gray-300 px-2 py-2 mb-2"
          type="email"
        />
        <input
          ref={passwordRef}
          placeholder="Enter Password"
          className="w-full border border-gray-300 px-2 py-2 mb-5"
          type="password"
        />

        <div className="flex flex-col items-center gap-4">
          <button
            onClick={handleSubmit}
            className="w-full text-white bg-blue-500 py-2 text-center hover:bg-blue-600 transition"
          >
            LOG IN
          </button>

          <div className="flex items-center justify-center gap-4 w-full">
            <div className=" w-full border-t border-gray-300"></div>
            <span>OR</span>
            <div className=" w-full border-t border-gray-300"></div>
          </div>
          <button className="w-full border border-blue-500 text-blue-500 bg-white py-2 text-center hover:bg-gray-100 transition">
            Continure with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default login;
