import React, { useState } from "react";
import ConAddEntry from "./conAddEntry";
import Entries from "./entries";

const containerEntries = ({ isSideOpen }) => {
  let x = isSideOpen ? "w-48 h-1" : "w-16 h-1";

  let entries = [
    { date: 24, entries: ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"] },
    { date: 23, entries: ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"] },
    { date: 24, entries: ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"] },
    { date: 23, entries: ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"] },
  ];

  return (
    <div className="w-full flex flex-col gap-40">
      <ConAddEntry />
      <Entries isSideOpen={isSideOpen} entries={entries} />
      <div className=""></div>
    </div>
  );
};

export default containerEntries;
