import React from "react";

const DelEntry = ({ setShowDel }) => {
  const handleDelete = () => {
    setShowDel(false);
  };
  return (
    <div className="fixed top-0 left-0 bg-black z-50 bg-opacity-40 w-screen h-screen flex items-center justify-center">
      <div className="p-5 w-72 bg-white rounded-md flex flex-row-reverse justify-between">
        <span
          onClick={() => setShowDel(false)}
          className="font-bold text-xl bg-blue-500 p-1 px-2 cursor-pointer text-white rounded-sm"
        >
          Go Back
        </span>

        <button
          onClick={() => {
            handleDelete();
          }}
          className="bg-red-500 px-5 py-2 rounded-sm text-white"
        >
          Delete Entry?
        </button>
      </div>
    </div>
  );
};

export default DelEntry;
