import React from "react";
import Entry from "./entry";

const dateConEntry = ({ entry }) => {
  return (
    <div className="border-b-4 border-gray-300 border-x">
      <div className="flex justify-between items-center bg-gray-300 py-2 px-7">
        <div className="text-gray-500">Today {entry.date}</div>
        <div className="text-gray-500">Total: 00:00:00</div>
      </div>
      {entry.entries.map((item, index) => {
        return <Entry task={item} />;
      })}
    </div>
  );
};

export default dateConEntry;
