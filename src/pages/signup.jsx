import { useState, useRef, useEffect } from "react";
import Toast from "../components/general/toast";
import { useNavigate } from "react-router-dom";
import postData from "../components/hooks/postData";
import UseAccessToken from "../components/hooks/useAccessToken";

const signup = () => {
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const cheackBoxRef = useRef(null);
  const navigateTo = useNavigate();
  const signupAPI = import.meta.env.VITE_signup_api_key;

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
        console.log(msg);
        return;
      }

      navigateTo("/");
    };
    confirm();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cheackBoxRef.current.checked) {
      setShowToast(true);
      setError("Please agree to the terms and conditions");
      return;
    }
    const email = emailRef.current.value;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      setShowToast(true);
      setError("Please use a valid email");
      return;
    }
    if (passwordRef.current.value.length < 8) {
      setShowToast(true);
      setError("Password must be 8 characters");
      return;
    }
    postDetails();
  };

  const postDetails = async () => {
    try {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const data = {
        email: email,
        password: password,
      };
      const response = await fetch(signupAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.status === 201) {
        navigateTo("/users/login", { replace: true });
      }
      if (response.status !== 201) {
        const message = await response.json();
        setShowToast(true);
        setError(message.message);
        return;
      }
    } catch (error) {
      setError("failed to connect to server");
      setShowToast(true);
      console.log(error.message);
    }
  };

  return (
    <form className="flex flex-col gap-10 justify-center items-center h-screen ">
      {showToast && (
        <Toast message={error} severity="danger" onClose={setShowToast} />
      )}
      <div className="text-center">
        <h2 className="text-5xl font-bold">Get Started with ClockIt</h2>
        <p className="text-gray-400 text-lg mt-4">
          Create a free account to start tracking time and supercharge your
          productivity.
        </p>
      </div>

      <div className="bg-white input-entry p-7 outline-none flex flex-col log-sign-con rounded-sm">
        <h2 className="font-medium text-lg text-center mb-6">Sign Up</h2>
        <input
          ref={emailRef}
          placeholder="Enter Email"
          className="w-full border border-gray-300 px-2 py-2 mb-2"
          type="email"
        />
        <input
          ref={passwordRef}
          minLength={8}
          placeholder="Enter Password"
          className="w-full border border-gray-300 px-2 py-2 mb-5"
          type="password"
        />
        <div className="flex gap-2 mb-5">
          <input ref={cheackBoxRef} type="checkbox" />
          <p>
            I agree to <span className="text-blue-500">Terms of Use</span>
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={handleSubmit}
            className="w-full text-white bg-blue-500 py-2 text-center hover:bg-blue-600 transition"
          >
            SIGN UP
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
    </form>
  );
};

export default signup;
