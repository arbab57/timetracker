import { FaTag, FaPlay } from "react-icons/fa";
import AddProjectBtn from "./addProjectBtn";
import { convertTimestampToTime } from "../hooks/time";
import { convertMsToTime } from "../hooks/time";
import { useEffect, useState } from "react";
import AddTag from "./addTag";

const entry = ({ entry, projects, tagSuggest, setTagSuggest }) => {
  const [project, setProject] = useState(entry.project ? entry.project : "");
  const [tags, setTags] = useState(entry.tags.length > 0 ? entry.tags : []);

  useEffect(() => {
    setProject(entry.project ? entry.project : "");
    setTags(entry.tags.length > 0 ? entry.tags : []);
  }, [entry.project, entry.tags]);

  const handleChange = () => {
    console.log("change");
  };

  return (
    <div className="flex xl:flex-row lg:justify-between flex-col lg:gap-0 py-1 sm:px-6 px-3  bg-white w-full border-b-2 border-gray-300">
      <div className="flex items-center xl:justify-start justify-between gap-2 xl:w-1/2 h-11">
        <input
          placeholder="Add description"
          onChange={handleChange}
          value={entry.title}
          className="h-10 xl:px-1 px-2 w-2/5 outline-none focus:border-gray-400 focus:border py-3 font-medium rounded-sm"
          type="text"
        />

        <AddProjectBtn
          projects={projects}
          project={project}
          setProject={setProject}
        />
      </div>

      <div className="flex lg:flex-row flex-col  justify-between  items-center ">
        <div className="flex lg:flex-row flex-row-reverse w-full justify-between">
          <AddTag
            tags={tags}
            setTags={setTags}
            tagSuggest={tagSuggest}
            setTagSuggest={setTagSuggest}
          />

          <div className="flex sm:gap-4 gap-1 items-center border-l border-gray-200 h-12 lg:px-3">
            <input
              onChange={handleChange}
              size="8"
              className=" outline-none hover:border-gray-400 hover:border py-3 lg:px-3 px-2 h-11 w-16  font-medium text-gray-500 rounded-sm"
              value={convertTimestampToTime(entry.startTime)}
              type="text"
            />

            <span>-</span>

            <input
              onChange={handleChange}
              className="outline-none hover:border-gray-400 hover:border p-3 h-11 w-16 font-medium text-gray-500 rounded-sm"
              value={convertTimestampToTime(entry.endTime)}
              type="text"
            />
          </div>
        </div>

        <div className="flex justify-between w-full">
          <p className="font-semibold text-xl border-l border-gray-200 h-12 py-3 lg:px-6 px-2 flex items-center justify-center">
            {convertMsToTime(entry.endTime - entry.startTime)}
          </p>
          <button className="text-xl lg:text-gray-500 text-white hover:text-white h-12 w-16 flex items-center justify-center hover:bg-blue-500 p-3 lg:bg-transparent bg-blue-500  transition border-r sm:border-l border-gray-200">
            <FaPlay />
          </button>
        </div>
      </div>
    </div>
  );
};

export default entry;
