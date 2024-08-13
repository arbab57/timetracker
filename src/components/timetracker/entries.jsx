import { useState } from "react";
import DayEntries from "./dayEntries";

const entries = ({
  isSideOpen,
  entries,
  projects,
  tagSuggest,
  setTagSuggest,
  setReRun,
}) => {
  let duplicatEntries = [...entries];
  duplicatEntries = duplicatEntries.sort((a, b) => (a > b ? 0 : -1));
  let newArr = [];
  let currentDate;
  let done = false;
  let objNum = -1;

  // console.log(duplicatEntries);

  while (duplicatEntries.length > 0) {
    const currentDate = duplicatEntries[0].showDate;
    const obj = { date: currentDate, entries: [] };
    newArr.push(obj);
    while (
      duplicatEntries.length > 0 &&
      duplicatEntries[0].showDate === currentDate
    ) {
      obj.entries.push(duplicatEntries.shift());
    }

    objNum++; // Move to the next object
  }

  let x2 = isSideOpen
    ? "w-full px-9 flex flex-col gap-8"
    : "w-full sm:px-5 px-3 flex flex-col gap-8";
  return (
    <div className={x2}>
      {newArr.map((item, index) => {
        return (
          <DayEntries
            allEntriesInDay={item}
            projects={projects}
            tagSuggest={tagSuggest}
            setTagSuggest={setTagSuggest}
            setReRun={setReRun}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default entries;
