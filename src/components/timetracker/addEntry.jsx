import AddProjectBtn from "./addProjectBtn";
import { useEffect, useRef, useState } from "react";
import AddTag from "./addTag";
import Clock from "./clock";
import { dateToStringDate } from "../hooks/time";
import entries from "./entries";
//
const addEntry = ({
  projects,
  tagSuggest,
  setTagSuggest,
  setEntries,
  inProgressEntry,
  setInProgressEntry,
}) => {
  const [tags, setTags] = useState([]);
  const [project, setProject] = useState("");
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const timerRef1 = useRef(null);
  const inputRef1 = useRef(null);

  useEffect(() => {
    if (inProgressEntry) {
      inputRef1.current.value = inProgressEntry.title;
      setProject(inProgressEntry.project);
      setTags(inProgressEntry.tags);
      setIsOn(true);
      const secondsPassed = (Date.now() - inProgressEntry.startTime) / 1000;
      setCount(secondsPassed);
      startClock();
    }
  }, []);

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

  const addInProgressEntry = () => {
    const newEntry = {
      title: inputRef1.current.value || "",
      project: project || "",
      tags: tags || [],
      startTime: Date.now(),
      inProgress: true,
    };
    setInProgressEntry(newEntry);
    startClock();
  };

  const addEntry = () => {
    const entryToAdd = {
      date: new Date().getDate(),
      title: inProgressEntry.title,
      showDate: dateToStringDate(Date.now()),
      project: inProgressEntry.project,
      tags: inProgressEntry.tags,
      startTime: inProgressEntry.startTime,
      endTime: Date.now(),
    };
    setEntries((prev) => {
      return [entryToAdd, ...prev];
    });
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
