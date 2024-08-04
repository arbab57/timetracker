import React, { useState } from "react";
import ConAddEntry from "./conAddEntry";
import Entries from "./entries";
import entries from "./entries";

// {
//   title: "taskinPRogress",
//   tags: ["important", "gold"],
//   project: "asdasd",
//   startTime: 1722752396489,
//   inProgress: true,
// },

const Timetracker = ({ isSideOpen }) => {
  const [entries, setEntries] = useState([
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
  ]);

  const [inProgressEntry, setInProgressEntry] = useState(null);

  let projects = entries
    .filter((entry) => entry.project !== "")
    .map((entry) => {
      return entry.project;
    });

  const [tagSuggest, setTagSuggest] = useState([
    ...new Set(entries.flatMap((entries) => entries.tags)),
  ]);

  return (
    <div className="w-full flex flex-col gap-40">
      <ConAddEntry
        projects={projects}
        tagSuggest={tagSuggest}
        setTagSuggest={setTagSuggest}
        setEntries={setEntries}
        entries={entries}
        inProgressEntry={inProgressEntry}
        setInProgressEntry={setInProgressEntry}
      />
      <Entries
        isSideOpen={isSideOpen}
        entries={entries}
        projects={projects}
        tagSuggest={tagSuggest}
        setTagSuggest={setTagSuggest}
      />
      <div className=""></div>
    </div>
  );
};

export default Timetracker;
