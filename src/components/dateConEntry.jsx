import React from "react";
import Entry from "./entry";

const dateConEntry = ({ entry }) => {
  return (
    <div className="border-b-4 border-gray-300 sm:border-x">
      <div className="flex justify-between items-center bg-gray-300 py-2 sm:px-7 px-3">
        <div className="text-gray-500">Today {entry.date}</div>
        <div className="text-gray-500">Total: 00:00:00</div>
      </div>
      <div className="flex flex-col sm:gap-0 gap-3">
        {entry.entries.map((item, index) => {
          return <Entry task={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default dateConEntry;
