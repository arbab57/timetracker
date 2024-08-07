import { FaPlay } from "react-icons/fa";
import AddProjectBtn from "./addProjectBtn";
import { convertTimestampToTime } from "../hooks/time";
import { convertMsToTime } from "../hooks/time";
import { useEffect, useRef, useState } from "react";
import AddTag from "./addTag";
import { dateToStringDate } from "../hooks/time";

const entry = ({ entry, projects, tagSuggest, setTagSuggest, setReRun }) => {
  const [project, setProject] = useState(entry.project ? entry.project : "");
  const [tags, setTags] = useState(entry.tags.length > 0 ? entry.tags : []);
  const [title, setTitle] = useState(null);
  const [shouldChange, setShouldChange] = useState(false);

  const titleRef = useRef(null);
  const dateRef = useRef(null);
  const showDateRef = useRef(null);

  // useEffect(() => {
  //   setProject(entry.project ? entry.project : "");
  //   setTags(entry.tags.length > 0 ? entry.tags : []);
  // }, [entry.project, entry.tags]);

  useEffect(() => {
    if (shouldChange) {
      handleChange();
      setShouldChange((prev) => !prev);
    }
  }, [tags, project, title]);

  const handleChange = () => {
    const updatedEntry = {
      date: new Date(entry.startTime).getDate(),
      title: titleRef.current.value ? titleRef.current.value : "",
      showDate: dateToStringDate(entry.startTime),
      project: project,
      tags: tags,
      startTime: entry.startTime,
      endTime: entry.endTime,
    };
    console.log(updatedEntry);
  };

  const handleDelete = async () => {
    try {
      const id = entry._id;
      const AccessToken = localStorage.getItem("accessToken");
      const response = await fetch("http://localhost:8000/timetracker/data", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authentication: `Bearer ${AccessToken}`,
        },
        body: JSON.stringify({ id: id }),
      });
      if (response.status === 200) {
        setReRun((prev) => !prev);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex xl:flex-row lg:justify-between flex-col lg:gap-0 py-1 sm:px-6 px-3  bg-white w-full border-b-2 border-gray-300 relative">
      <div
        onClick={handleDelete}
        className="absolute right-0 top-0 font-bold text-white px-2 bg-red-500 h-full flex items-center justify-center cursor-pointer"
      >
        x
      </div>
      <div className="flex items-center xl:justify-start justify-between gap-2 xl:w-1/2 h-11">
        <input
          ref={titleRef}
          onBlur={(e) => {
            setShouldChange((prev) => !prev);
            setTitle(e.target.value);
          }}
          placeholder="Add description"
          defaultValue={entry.title}
          className="h-10 xl:px-1 px-2 w-2/5 outline-none focus:border-gray-400 focus:border py-3 font-medium rounded-sm"
          type="text"
        />

        <AddProjectBtn
          projects={projects}
          project={project}
          setProject={setProject}
          SetShouldChange={shouldChange}
        />
      </div>

      <div className="flex lg:flex-row flex-col  justify-between  items-center ">
        <div className="flex lg:flex-row flex-row-reverse w-full justify-between">
          <AddTag
            tags={tags}
            setTags={setTags}
            tagSuggest={tagSuggest}
            setTagSuggest={setTagSuggest}
            setShouldChange={setShouldChange}
          />

          <div className="flex sm:gap-4 gap-1 items-center border-l border-gray-200 h-12 lg:px-3">
            <input
              size="8"
              readOnly
              className=" outline-none hover:border-gray-400 hover:border py-3 lg:px-3 px-2 h-11 w-16  font-medium text-gray-500 rounded-sm"
              value={convertTimestampToTime(entry.startTime)}
              type="text"
            />

            <span>-</span>

            <input
              readOnly
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
