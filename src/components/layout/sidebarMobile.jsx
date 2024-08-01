import {
  FaClock,
  FaCheckSquare,
  FaCalendar,
  FaBook,
  FaUsers,
  FaTag,
  FaProjectDiagram,
  FaUserAlt,
  FaChevronLeft,
} from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const sidebar = ({ setIsSideOpen }) => {
  return (
    <div className="w-screen fixed top-0 bg-gray-500 z-50 bg-opacity-50">
      <div className=" h-screen ">
        <div className="flex items-center gap-2 h-16 bg-white w-48">
          <FaBars className="text-2xl ml-5" />
          <div className="flex items-center gap-1 ">
            <FaClock className="text-2xl text-blue-500" />
            <p className="font-bold text-2xl">ClockIt</p>
          </div>
        </div>

        <nav className="shadow-md border-r relative border-gray-300 w-48 h-full bg-white z-10">
          <div
            onClick={() => {
              setIsSideOpen((prev) => !prev);
            }}
            className="w-6 h-6 text-sm bg-white absolute -right-3 top-96 input-entry flex  justify-center items-center cursor-pointer"
          >
            <FaChevronLeft />
          </div>

          <div className="flex gap-2 items-center py-3 bg-gray-200 w-full cursor-pointer">
            <FaClock className="text-gray-500 text-xl ml-5" />
            <p className="text-base">TIME TRACKER</p>
          </div>

          <div className="flex gap-2 items-center py-3 w-full hover:bg-gray-200 transition cursor-pointer">
            <FaCalendar className="text-gray-500 text-xl ml-5" />
            <p className="text-base">CALENDER</p>
          </div>

          <p className="ml-5 my-4 text-gray-600">ANALYZE</p>

          <div className="flex gap-2 items-center py-3 w-full hover:bg-gray-200 transition cursor-pointer">
            <FaCheckSquare className="text-gray-500 text-xl ml-5" />
            <p className="text-base">DASHBOARD</p>
          </div>

          <div className="flex gap-2 items-center py-3 w-full hover:bg-gray-200 transition cursor-pointer">
            <FaBook className="text-gray-500 text-xl ml-5" />
            <p className="text-base">REPORTS</p>
          </div>

          <p className="ml-5 my-4 text-gray-600">MANAGE</p>

          <div className="flex gap-2 items-center py-3 w-full hover:bg-gray-200 transition cursor-pointer">
            <FaProjectDiagram className="text-gray-500 text-xl ml-5" />
            <p className="text-base">PROJECTS</p>
          </div>
          <div className="flex gap-2 items-center py-3 w-full hover:bg-gray-200 transition cursor-pointer">
            <FaTag className="text-gray-500 text-xl ml-5" />
            <p className="text-base">TAGS</p>
          </div>
          <div className="flex gap-2 items-center py-3 w-full hover:bg-gray-200 transition cursor-pointer">
            <FaUsers className="text-gray-500 text-xl ml-5" />
            <p className="text-base">TEAM</p>
          </div>
          <div className="flex gap-2 items-center py-3 w-full hover:bg-gray-200 transition cursor-pointer">
            <FaUserAlt className="text-gray-500 text-xl ml-5" />
            <p className="text-base">CLIENTS</p>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default sidebar;