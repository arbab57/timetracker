import { FaBars, FaClock, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const logo = ({ email }) => {
  return (
    <div className="flex sm:justify-start justify-between items-center sm:gap-7 gap-2 w-full">
      <Link to={"/"} className="flex items-center gap-2">
        <FaBars className="text-2xl" />
        <div className="flex items-center gap-1 ">
          <FaClock className="text-2xl text-blue-500" />
          <p className="font-bold text-2xl">ClockIt</p>
        </div>
      </Link>

      <div className=" sm:flex hidden items-center h-10">
        <p className="font-medium text-gray-500">{email}</p>
      </div>

      <div className="sm:hidden">
        <div className="border-l border-gray-300 h-10 flex items-center justify-center sm:w-16 w-10">
          <FaUser className="text-2xl text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default logo;
