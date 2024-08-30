import { FaPlay, FaTrash } from "react-icons/fa";
import AddProjectBtn from "./addProjectBtn";
import { convertTimestampToTime } from "../hooks/time";
import { convertMsToTime } from "../hooks/time";
import { useEffect, useRef, useState } from "react";
import AddTag from "./addTag";
import { dateToStringDate } from "../hooks/time";
import putData from "../hooks/putData";
import postData from "../hooks/postData";
import DelEntry from "./delEntry";
import Toast from "../general/toast";
import { useNavigate } from "react-router-dom";

const entry = ({
  entry,
  projects,
  tagSuggest,
  setTagSuggest,
  setReRun,
  setData,
}) => {
  const [project, setProject] = useState(entry.project ? entry.project : "");
  const [tags, setTags] = useState(entry.tags.length > 0 ? entry.tags : []);
  const [title, setTitle] = useState(entry.title);
  const [shouldChange, setShouldChange] = useState(false);
  const [showDel, setShowDel] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const navigateTo = useNavigate();

  const titleRef = useRef(null);
  const dateRef = useRef(null);
  const showDateRef = useRef(null);

  useEffect(() => {
    setProject(entry.project ? entry.project : "");
    setTags(entry.tags.length > 0 ? entry.tags : []);
    setTitle(entry.title);
  }, [entry.project, entry.tags, entry.title]);

  useEffect(() => {
    if (shouldChange) {
      handleChange();
      setShouldChange(false);
    }
  }, [tags, project, title, shouldChange]);

  const handleChange = async () => {
    const updatedEntry = {
      date: new Date(entry.startTime).getDate(),
      title: titleRef.current.value ? titleRef.current.value : "",
      showDate: dateToStringDate(entry.startTime),
      project: project,
      tags: tags,
      startTime: entry.startTime,
      endTime: entry.endTime,
    };
    const hasChanged = (oldEntry, newEntry) => {
      return (
        oldEntry.date !== newEntry.date ||
        oldEntry.title !== newEntry.title ||
        oldEntry.showDate !== newEntry.showDate ||
        oldEntry.project !== newEntry.project ||
        JSON.stringify(oldEntry.tags) !== JSON.stringify(newEntry.tags) ||
        oldEntry.startTime !== newEntry.startTime ||
        oldEntry.endTime !== newEntry.endTime
      );
    };
    if (hasChanged(entry, updatedEntry)) {
      const body = { updatedEntry: updatedEntry, entryId: entry._id };

      setData((prev) => {
        const data = [...prev]
        const index = data.findIndex((e) => e._id === entry._id)
        if(index !== -1) {
          data[index] = updatedEntry
          localStorage.setItem("data", JSON.stringify(data))
          return data
        }
        return [...prev]

      })

        setReRun((prev) => !prev);
        setShowToast(true);
      
    }
  };

  const handleDelete = async () => {
    try {
      const id = entry?._id;
      setData((prev) => {
        localStorage.setItem(
          "data",
          JSON.stringify([...prev].filter((e) => e._id !== entry._id))
        );

        return [...prev].filter((e) => e._id !== entry._id);
      });
      setReRun((prev) => !prev);
    } catch (error) {
      console.log(error.message);
    }
  };

  const addInProgressEntry = async () => {
    const newEntry = {
      title: entry.title,
      project: entry.project,
      tags: entry.tags,
      startTime: Date.now(),
      inProgress: true,
      _id: entry._id,
    };
    const inProgress = JSON.parse(localStorage.getItem("inProgress"));
    if (!inProgress) {
      localStorage.setItem("inProgress", JSON.stringify(newEntry));
      setReRun((prev) => !prev);
    }
  };

  return (
    <div className="font-roboto flex xl:flex-row lg:justify-between flex-col lg:gap-0 py-1 sm:px-6 px-3  bg-white w-full border-b-2 border-gray-300 relative">
      {showToast && (
        <Toast
          message={"Entry updated"}
          severity="success"
          onClose={setShowToast}
        />
      )}
      <div className="flex items-center xl:justify-start justify-between gap-2 xl:w-1/2 h-11">
        <input
          ref={titleRef}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          onBlur={(e) => {
            setShouldChange(true);
            setTitle(e.target.value);
          }}
          placeholder="Add description"
          value={title}
          className="h-10 xl:px-1 px-2 sm:w-64 w-3/5 outline-none focus:border-gray-400 focus:border py-3 font-medium rounded-sm"
          type="text"
        />

        <AddProjectBtn
          projects={projects}
          project={project}
          setProject={setProject}
          setShouldChange={setShouldChange}
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
            <p>{convertTimestampToTime(entry.startTime)}</p>

            <span>-</span>
            <p>{convertTimestampToTime(entry.endTime)}</p>
          </div>
        </div>

        <div className="flex justify-between w-full">
          <p className=" text-xl border-l border-gray-200 h-12 py-3 lg:px-6 px-2 flex items-center justify-center">
            {convertMsToTime(entry.endTime - entry.startTime)}
          </p>
          <div className="flex">
            <button
              onClick={() => addInProgressEntry()}
              className="text-xl lg:text-gray-500 text-white hover:text-white h-12 w-16 flex items-center justify-center hover:bg-blue-500 p-3 lg:bg-transparent bg-blue-500  transition border-r sm:border-l border-gray-200"
            >
              <FaPlay />
            </button>
            <div
              onClick={() => setShowDel((prev) => !prev)}
              className="font-bold text-xl text-gray-500 px-2 w-16 hover:text-white  hover:bg-red-500 h-full flex items-center justify-center transition cursor-pointer"
            >
              <FaTrash />
            </div>

            {showDel && (
              <DelEntry setShowDel={setShowDel} handleDelete={handleDelete} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default entry;
