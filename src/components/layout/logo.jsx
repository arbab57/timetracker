import { FaBars, FaClock, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Clock from "../../assets/clock.svg";
import logo1 from "../../assets/logo6.svg"


const logo = ({ email }) => {
  return (
    <div className="flex sm:justify-start justify-between items-center sm:gap-8 gap-2 w-full">
      <Link to={"/"} className="flex items-center gap-2">
        <FaBars className="text-2xl" />
        <div className="flex items-center ">
          <img className="w-7" src={Clock} alt="" />
          <p className="font-bold italic text-2xl font-roboto">ClockIt</p>
          {/* <img className="w-36" src={logo1} alt="" /> */}
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
