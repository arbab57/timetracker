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
      ? "flex gap-2 items-center py-4 w-full bg-gray-200 transition cursor-pointer"
      : "flex gap-2 items-center py-4 w-full hover:bg-gray-200 transition cursor-pointer";
  };
  return (
    <div className="h-screen sticky top-0 flex flex-col">
      <div className="h-70px"></div>
      <nav className="shadow-md border-r border-gray-300 w-16 h-screen sticky top-16 bg-white z-10">
        <div
          onClick={() => {
            setIsSideOpen((prev) => !prev);
          }}
          className="w-6 h-6 z-50 text-sm bg-white absolute -right-4 top-72 input-entry flex  justify-center items-center cursor-pointer"
        >
          <FaChevronRight />
        </div>

        <NavLink to={"/"} className={linkClass}>
          <FaClock className="text-gray-500 text-xl ml-5" />
        </NavLink>

        <NavLink to={"/calender"} className={linkClass}>
          <FaCalendar className="text-gray-500 text-xl ml-5" />
        </NavLink>

        <NavLink to={"/dashboard"} className={linkClass}>
          <FaCheckSquare className="text-gray-500 text-xl ml-5" />
        </NavLink>

        <NavLink to={"/reports"} className={linkClass}>
          <FaBook className="text-gray-500 text-xl ml-5" />
        </NavLink>

        <NavLink to={"/projects"} className={linkClass}>
          <FaProjectDiagram className="text-gray-500 text-xl ml-5" />
        </NavLink>
        <NavLink to={"/tags"} className={linkClass}>
          <FaTag className="text-gray-500 text-xl ml-5" />
        </NavLink>
        <NavLink to={"/team"} className={linkClass}>
          <FaUsers className="text-gray-500 text-xl ml-5" />
        </NavLink>
        <NavLink to={"/clients"} className={linkClass}>
          <FaUserAlt className="text-gray-500 text-xl ml-5" />
        </NavLink>
      </nav>
    </div>
  );
};

export default ShortSideBar;
