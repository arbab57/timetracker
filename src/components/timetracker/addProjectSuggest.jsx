import React from "react";

const AddProjectSuggest = ({ handleAdd, projects, boxFor }) => {
  return (
    <div>
      {projects.length === 0 ? `No ${boxFor}s` : null}

      <ul className="flex flex-col items-start gap-4 py-3 project-list">
        {projects.map((item, index) => {
          return (
            <li key={index} className="text-lg cursor-pointer ">
              <button
                className="hover:bg-blue-500 hover:text-white transition px-2 py-1 rounded-md hover:scale-105"
                onClick={(e) => {
                  handleAdd(e);
                }}
              >
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AddProjectSuggest;
