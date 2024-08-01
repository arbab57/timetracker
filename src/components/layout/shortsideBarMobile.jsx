import {
  FaClock,
  FaCheckSquare,
  FaCalendar,
  FaBook,
  FaUsers,
  FaTag,
  FaProjectDiagram,
  FaUserAlt,
  FaChevronRight,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ShortSideBar = ({ setIsSideOpen }) => {
  const linkClass = ({ isActive }) => {
    return isActive
      ? "flex gap-2 items-center py-3 w-full bg-gray-200 transition cursor-pointer"
      : "flex gap-2 items-center py-3 w-full hover:bg-gray-200 transition cursor-pointer";
  };
  return (
    <div className="h-screen w-0 relative flex flex-col">
      <div className="h-70px"></div>
      <nav className="shadow-md border-r border-gray-300 h-screen  bg-white">
        <div
          onClick={() => {
            setIsSideOpen((prev) => !prev);
          }}
          className="w-6 h-6 text-sm bg-white absolute -right-6 top-72 input-entry flex  justify-center items-center cursor-pointer z-50"
        >
          <FaChevronRight />
        </div>
      </nav>
    </div>
  );
};

export default ShortSideBar;
