import { useState } from "react";
import { BiPlusCircle } from "react-icons/bi";
import AddProjectForm from "./addProjectForm";
import AddProjectSuggest from "./addProjectSuggest";

const addProjectBtn = ({ project, setProject, projects, setShouldChange }) => {
  const [show, setShow] = useState(false);

  const close = () => {
    setShow((prev) => !prev);
  };

  const handleClose = () => {
    setShow((prev) => !prev);
  };

  const handleAdd = (e) => {
    setProject(e.target.innerText);
    setShouldChange((prev) => !prev);

    close();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.input.value) {
      setProject(e.target.input.value);
      setShouldChange((prev) => !prev);

      close();
    }
  };

  return (
    <div className="inline-block relative cursor-pointer">
      <div onClick={close}>
        {project ? (
          <div className="py-2 xl:px-4 flex items-center hover:underline cursor-pointer hover:text-blue-500">
            <ul className="project-list">
              <li>{project}</li>
            </ul>
          </div>
        ) : (
          <button className="flex gap-1 items-center relative text-lg text-blue-500 hover:bg-blue-500 hover:text-white transition py-2 xl:px-4 px-2 ms-2">
            <div className="flex gap-1 items-center ">
              <BiPlusCircle className="text-lg" />
              <span>Project</span>
            </div>
          </button>
        )}
      </div>

      {show && (
        <div
          onMouseLeave={handleClose}
          className="absolute right-0 mx-auto mt-0 w-72 bg-white input-entry px-3 pt-3 rounded-sm z-10"
        >
          <AddProjectForm handleSubmit={handleSubmit} boxFor={"project"} />
          <AddProjectSuggest
            handleAdd={handleAdd}
            projects={projects}
            boxFor={"project"}
          />
        </div>
      )}
    </div>
  );
};

export default addProjectBtn;
