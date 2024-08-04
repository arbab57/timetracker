import { FaBell, FaQuestionCircle, FaUser } from "react-icons/fa";
import HoverIcon from "./hoverIcon";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UseAccessToken from "../hooks/useAccessToken";

const menus = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigateTo = useNavigate();

  const logOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigateTo("/users/login", { replace: true });
  };

  const handleClick = () => {
    setShowMenu(true);
  };
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
      <div
        onMouseLeave={() => setShowMenu(false)}
        onClick={handleClick}
        className="inline-block relative"
      >
        <div className="border-l border-gray-300 h-10 flex items-center justify-center sm:w-16 w-10 ">
          <FaUser className="text-2xl text-gray-500 cursor-pointer" />
        </div>
        {showMenu && (
          <div className="bg-white p-4 absolute right-0 mt-0 w-48  border border-gray-300 rounded-lg shadow-lg z-50 flex justify-center">
            <button
              onClick={logOut}
              className="bg-red-500 text-white rounded-md px-4 py-1"
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default menus;
