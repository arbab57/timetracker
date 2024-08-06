import AddProjectBtn from "./addProjectBtn";
import { useEffect, useRef, useState } from "react";
import AddTag from "./addTag";
import Clock from "./clock";
import { dateToStringDate } from "../hooks/time";
import postData from "../hooks/postData";
import UseFetch from "../hooks/useFetch";
import Loading from "../../pages/loading";
//
const addEntry = ({
  projects,
  tagSuggest,
  setTagSuggest,
  setEntries,
  setInProgressEntry,
  inProgressEntry,
}) => {
  const [tags, setTags] = useState([]);
  const [project, setProject] = useState("");
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const timerRef1 = useRef(null);
  const inputRef1 = useRef(null);
  const [inProgress, setInProgress] = useState(null);
  const [x, setX] = useState(null);

  const [data, error, loading] = UseFetch(
    "http://localhost:8000/timetracker/data/inprogress"
  );

  useEffect(() => {
    if (!loading) {
      setInProgress(data);
      if (inProgress) {
        inputRef1.current.value = inProgress.title;
        setProject(inProgress.project);
        setTags(inProgress.tags);
        setIsOn(true);
        const secondsPassed = (Date.now() - inProgress.startTime) / 1000;
        setCount(secondsPassed);
        startClock();
      }
    }
  }, [loading]);

  const startClock = () => {
    setIsOn(true);

    timerRef1.current = setInterval(
      () => setCount((prevCount) => prevCount + 1),
      1000
    );
  };

  const stopClock = () => {
    clearInterval(timerRef1.current);
    setIsOn(false);
    setCount(0);
    inputRef1.current.value = "";
    setProject("");
    setTags([]);
    addEntry();
  };

  const addEntry = async () => {
    console.log(inProgress);
    const entryToAdd = {
      date: new Date().getDate(),
      title: inProgress.title,
      showDate: dateToStringDate(Date.now()),
      project: inProgress.project,
      tags: inProgress.tags,
      startTime: inProgress.startTime,
      endTime: Date.now(),
    };
    const response = await postData(
      "http://localhost:8000/timetracker/data",
      newEntry
    );

    if (response.status === 201) {
      setEntries((prev) => {
        return [entryToAdd, ...prev];
      });
    }
  };

  const addInProgressEntry = async () => {
    const newEntry = {
      title: inputRef1.current.value || "",
      project: project || "",
      tags: tags || [],
      startTime: Date.now(),
      inProgress: true,
    };
    const response = await postData(
      "http://localhost:8000/timetracker/data/progress",
      newEntry
    );
    inProgress = newEntry;
    // console.log(response);
    setInProgressEntry(newEntry);
    startClock();
  };

  return (
    <div className="flex justify-between lg:flex-row flex-col py-2 px-3 input-entry bg-white z-30">
      {loading && <Loading />}
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
        />
      </div>

      <div className="flex items-center justify-between">
        <AddTag
          tags={tags}
          setTags={setTags}
          tagSuggest={tagSuggest}
          setTagSuggest={setTagSuggest}
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
