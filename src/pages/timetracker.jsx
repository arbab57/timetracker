import React, { useState } from "react";
import ConAddEntry from "../components/timetracker/conAddEntry";
import Entries from "../components/timetracker/entries";

const containerEntries = ({ isSideOpen }) => {
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
