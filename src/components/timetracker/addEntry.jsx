import AddProjectBtn from "./addProjectBtn";
import { useEffect, useRef, useState } from "react";
import AddTag from "./addTag";
import Clock from "./clock";
import { dateToStringDate } from "../hooks/time";
import postData from "../hooks/postData";
import UseFetch from "../hooks/useFetch";
import Loading from "../../pages/loading";
import { json, useNavigate } from "react-router-dom";

//
const addEntry = ({
  projects,
  tagSuggest,
  setTagSuggest,
  setEntries,
  setInProgressEntry,
  inProgressEntry,
  setReRun,
  reRun,
}) => {
  const [tags, setTags] = useState([]);
  const [project, setProject] = useState("");
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);

  const [inProgress, setInProgress] = useState(
    JSON.parse(localStorage.getItem("inProgress")) || null
  );

  const timerRef1 = useRef(null);
  const inputRef1 = useRef(null);

  const setShouldChange = () => {
    null;
  };
  useEffect(() => {
    setInProgress(JSON.parse(localStorage.getItem("inProgress")) || null);
  }, [reRun]);

  useEffect(() => {
    if (inProgress) {
      inputRef1.current.value = inProgress.title;
      setProject(inProgress.project);
      setTags(inProgress.tags);
      const secondsPassed = (Date.now() - inProgress.startTime) / 1000;
      setCount(secondsPassed);
      startClock();
      return;
    }
  }, [inProgress]);

  const startClock = () => {
    if (!isOn && !timerRef1.current) {
      setIsOn(true);
      timerRef1.current = setInterval(
        () => setCount((prevCount) => prevCount + 1),
        1000
      );
    }
  };

  const stopClock = () => {
    clearInterval(timerRef1.current);
    setIsOn(false);
    setCount(0);
    inputRef1.current.value = "";
    setProject("");
    setTags([]);
    timerRef1.current = null
    addEntry();
  };

  const addEntry = async () => {
    const entryToAdd = {
      date: new Date().getDate(),
      title: inProgress.title,
      showDate: dateToStringDate(Date.now()),
      project: inProgress.project,
      tags: inProgress.tags,
      startTime: inProgress.startTime,
      endTime: Date.now(),
      _id: inProgress._id
    };
    setEntries((prev) => {
      localStorage.setItem("data", JSON.stringify([entryToAdd, ...prev]));
      return [ ...prev, entryToAdd];
    });
    localStorage.removeItem("inProgress");
    setReRun((prev) => !prev);
  };

  const addInProgressEntry = async () => {
    const newEntry = {
      title: inputRef1.current.value || "",
      project: project || "",
      tags: tags || [],
      startTime: Date.now(),
      inProgress: true,
      _id: Math.random()
    };
    localStorage.setItem("inProgress", JSON.stringify(newEntry));
    setReRun((prev) => {
      return !prev;
    });
    startClock();
  };

  return (
    <div className="flex justify-between lg:flex-row flex-col py-2 px-3 input-entry bg-white z-30">
      <div className="flex items-center h-11 justify-between lg:justify-start sm:gap-2 w-full">
        <input
          ref={inputRef1}
          placeholder="What are you working on?"
          className="h-10 lg:px-4 sm:w-3/5 w-full outline-none focus:border-gray-400 focus:border py-3 rounded-sm"
          type="text"
        />
        <AddProjectBtn
          projects={projects}
          project={project}
          setProject={setProject}
          setShouldChange={setShouldChange}
        />
      </div>

      <div className="flex items-center justify-between">
        <AddTag
          tags={tags}
          setTags={setTags}
          tagSuggest={tagSuggest}
          setTagSuggest={setTagSuggest}
          setShouldChange={setShouldChange}
        />
        <Clock
          count={count}
          isOn={isOn}
          startClock={addInProgressEntry}
          stopClock={stopClock}
        />
      </div>
    </div>
  );
};

export default addEntry;
