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
      tags: ["important", "gold"],
      startTime: 1722575996105,
      endTime: 1722585999999,
    },
    {
      date: 24,
      title: "task 2",
      showDate: "24-07-2022",
      project: "TimeTrac",
      tags: ["important"],
      startTime: 1722575996105,
      endTime: 1722578999999,
    },
    {
      date: 24,
      title: "task 3",
      showDate: "24-07-2022",
      project: "",
      tags: [],
      startTime: 1722575996105,
      endTime: 1722585999999,
    },
    {
      date: 23,
      title: "task 1",
      showDate: "23-07-2022",
      project: "TimeTracker1",
      tags: [],
      startTime: 1722575996105,
      endTime: 1722581999999,
    },
    {
      date: 22,
      title: "task 1",
      showDate: "23-07-2022",
      project: "TimeTracker123",
      tags: [],
      startTime: 1722575996105,
      endTime: 1722579999999,
    },
    {
      date: 21,
      title: "task 1",
      showDate: "21-07-2022",
      project: "TimeTracker13",
      tags: ["important", "gold"],
      startTime: 1722575996105,
      endTime: 1722587999999,
    },
  ];
  let projects = entries
    .filter((entry) => entry.project !== "")
    .map((entry) => {
      return entry.project;
    });

  return (
    <div className="w-full flex flex-col gap-40">
      <ConAddEntry projects={projects} />
      <Entries isSideOpen={isSideOpen} entries={entries} projects={projects} />
      <div className=""></div>
    </div>
  );
};

export default Timetracker;
