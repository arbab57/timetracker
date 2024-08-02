import { FaTag } from "react-icons/fa";
import AddProjectBtn from "./addProjectBtn";
import { useState } from "react";
const addEntry = () => {
  const [project, setProject] = useState("");

  return (
    <div className="flex justify-between lg:flex-row flex-col py-2 px-3 input-entry bg-white">
      <div className="flex items-center h-11 justify-between lg:justify-start sm:gap-2 w-full">
        <input
          placeholder="What are you working on?"
          className="h-10 lg:px-4 sm:w-3/5 w-full outline-none focus:border-gray-400 focus:border py-3 rounded-sm"
          type="text"
        />
        <AddProjectBtn project={project} setProject={setProject} />
      </div>

      <div className="flex items-center justify-between">
        <button className="text-xl text-blue-500 border-l border-gray-200 p-3 h-12 sm:w-16 flex items-center justify-center hover:bg-blue-500 hover:text-white transition">
          <FaTag />
        </button>
        <p className="font-semibold text-2xl border-l border-gray-200 h-12 py-3 sm:px-7 px-3 flex items-center">
          00:00:00
        </p>
        <button className="h-full bg-blue-500 text-white text-lg sm:px-10 px-5 hover:scale-105 transition">
          START
        </button>
      </div>
    </div>
  );
};

export default addEntry;
