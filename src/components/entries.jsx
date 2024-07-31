import React from "react";
import DayEntries from "./dayEntries";

const entries = ({ isSideOpen, entries }) => {
  let x2 = isSideOpen
    ? "w-full px-9 flex flex-col gap-8"
    : "w-full sm:px-5 px-3 flex flex-col gap-8";
  return (
    <div className={x2}>
      {entries.map((item, index) => {
        return <DayEntries entry={item} key={index} />;
      })}
    </div>
  );
};

export default entries;
