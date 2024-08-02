import React, { useState } from "react";
import ConAddEntry from "./conAddEntry";
import Entries from "./entries";

const Timetracker = ({ isSideOpen }) => {
  let entries = [
    {
      date: 24,
      title: "task 1",
      showDate: "24-07-2022",
      project: "",
      tag: "important",
      startTime: 1722575996105,
      endTime: 1722585999999,
    },
    {
      date: 24,
      title: "task 2",
      showDate: "24-07-2022",
      project: "TimeTracker",
      tag: "",
      startTime: 1722575996105,
      endTime: 1722578999999,
    },
    {
      date: 24,
      title: "task 3",
      showDate: "24-07-2022",
      project: "TimeTracker",
      tag: "",
      startTime: 1722575996105,
      endTime: 1722585999999,
    },
    {
      date: 23,
      title: "task 1",
      showDate: "23-07-2022",
      project: "TimeTracker",
      tag: "important",
      startTime: 1722575996105,
      endTime: 1722581999999,
    },
    {
      date: 22,
      title: "task 1",
      showDate: "23-07-2022",
      project: "TimeTracker",
      tag: "important",
      startTime: 1722575996105,
      endTime: 1722579999999,
    },
    {
      date: 21,
      title: "task 1",
      showDate: "21-07-2022",
      project: "TimeTracker",
      tag: "important",
      startTime: 1722575996105,
      endTime: 1722587999999,
    },
  ];

  let projects = ["timetracker", "calander", "hello", "main", "farm"];

  return (
    <div className="w-full flex flex-col gap-40">
      <ConAddEntry projects={projects} />
      <Entries isSideOpen={isSideOpen} entries={entries} projects={projects} />
      <div className=""></div>
    </div>
  );
};

export default Timetracker;
