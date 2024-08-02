import { useState } from "react";
import { BiPlusCircle, BiPlus, BiSolidCircle } from "react-icons/bi";
import AddProjectForm from "./addProjectForm";
import AddProjectSuggest from "./addProjectSuggest";

const addProjectBtn = ({ project, setProject }) => {
  const [show, setShow] = useState(false);

  let projects = ["timetracker", "calander", "hello", "main", "farm"];

  const close = () => {
    setShow((prev) => !prev);
  };

  const handleClose = () => {
    setShow((prev) => !prev);
  };

  const handleAdd = (e) => {
    setProject(e.target.innerText);
    close();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.input.value) {
      setProject(e.target.input.value);
      close();
    }
  };

  return (
    <div className="inline-block relative cursor-pointer">
      <div onClick={close}>
        {project ? (
          <div className="py-2 xl:px-4 px-2 flex items-center">
            <ul className="project-list">
              <li>{project}</li>
            </ul>
          </div>
        ) : (
          <button className="flex gap-1 items-center relative  text-lg text-blue-500 hover:bg-blue-500 hover:text-white transition py-2 xl:px-4 px-2">
            <div className="flex gap-1 items-center">
              <BiPlusCircle className="text-lg" />
              <span>Project</span>
            </div>
          </button>
        )}
      </div>

      {show && (
        <div
          onMouseLeave={handleClose}
          className="absolute right-0 mx-auto mt-0 w-72 bg-white input-entry px-3 pt-3 rounded-sm "
        >
          <AddProjectForm handleSubmit={handleSubmit} />
          <AddProjectSuggest handleAdd={handleAdd} projects={projects} />
        </div>
      )}
    </div>
  );
};

export default addProjectBtn;
