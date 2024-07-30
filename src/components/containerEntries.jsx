import React, { useState } from "react";
import Entry from "./entry";
import DateConEntry from "./dateConEntry";
import AddEntry from "./addEntry";

const containerEntries = ({ isSideOpen }) => {
  let x = isSideOpen ? "w-48 h-1" : "w-16 h-1";
  let x2 = isSideOpen
    ? "w-full px-9 flex flex-col gap-8"
    : "w-full sm:px-5 px-3 flex flex-col gap-8";

  let entries = [
    { date: 24, entries: ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"] },
    { date: 23, entries: ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"] },
    { date: 24, entries: ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"] },
    { date: 23, entries: ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"] },
  ];

  return (
    <div className="w-full flex flex-col gap-40">
      <AddEntry />
      <div className={x2}>
        {entries.map((item, index) => {
          return <DateConEntry entry={item} key={index} />;
        })}
      </div>
      <div className=""></div>
    </div>
  );
};

export default containerEntries;
