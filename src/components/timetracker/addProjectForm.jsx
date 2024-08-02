import React from "react";

const AddProjectForm = ({ handleSubmit }) => {
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="w-full flex flex-col gap-1 mb-2"
    >
      <input
        autoComplete="off"
        name="input"
        placeholder="Add project"
        className="w-full px-1 py-1 border border-gray-500 rounded-sm"
        type="text"
      />
      <button className="text-white bg-blue-500 hover:scale-105 transition rounded-sm w-full py-1 text-lg flex items-center justify-center">
        Create Project
      </button>
    </form>
  );
};

export default AddProjectForm;
