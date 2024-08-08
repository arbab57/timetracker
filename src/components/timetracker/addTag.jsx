import { useState } from "react";
import { FaTag } from "react-icons/fa";

import AddProjectForm from "./addProjectForm";
import AddProjectSuggest from "./addProjectSuggest";

const AddTag = ({
  tags,
  setTags,
  tagSuggest,
  setTagSuggest,
  setShouldChange,
}) => {
  const [show, setShow] = useState(false);
  const [TagIndex, setIndex] = useState(null);

  const close = () => {
    setShow((prev) => !prev);
  };

  const handleClose = () => {
    setShow((prev) => !prev);
  };

  const handleAdd = (e) => {
    if (tags.length > 1) {
      setTags((prev) => {
        return prev.map((tag, index) => {
          if (index === TagIndex) return e.target.innerText;
          return tag;
        });
      });
      setShouldChange((prev) => !prev);

      close();
      return;
    }
    setTags((prev) => {
      return [e.target.innerText, ...prev];
    });
    setShouldChange((prev) => !prev);

    close();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.input.value) {
      if (tags.length > 1) {
        setTags((prev) => {
          if (prev.length > 0) {
            return prev.map((tag, index) => {
              if (index === TagIndex) return e.target.input.value;
              return tag;
            });
          }
          return [e.target.input.value, ...prev];
        });
        setTagSuggest((prev) => {
          return [e.target.input.value, ...prev];
        });
        setShouldChange((prev) => !prev);

        close();
        return;
      }
      setTags((prev) => {
        if (TagIndex === null) {
          return [e.target.input.value, ...prev];
        }
        return prev.map((tag, index) => {
          if (index === TagIndex) return e.target.input.value;
          return tag;
        });
      });

      setTagSuggest((prev) => {
        return [e.target.input.value, ...prev];
      });
      setShouldChange((prev) => !prev);

      close();
    }
  };

  return (
    <div className="inline-block relative cursor-pointer">
      <div className="flex">
        {tags.length === 1 ? (
          <button
            onClick={() => {
              setIndex(null), close();
            }}
            className="text-xl text-blue-500 xl:p-3 py-3 px-2 h-12 flex items-center justify-center  hover:bg-blue-500 hover:text-white transition "
          >
            <FaTag />
          </button>
        ) : null}
        {tags.length ? (
          <div className="py-2 xl:px-4 h-12 text-nowrap flex items-center gap-1 cursor-pointer ">
            {tags.map((tag, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    setIndex(index);
                    close();
                  }}
                  className="sm:px-3 px-1 h-full flex items-center justify-center bg-red-300 rounded-lg text-blue-900 font-semibold hover:scale-105 transition"
                >
                  {tag}
                </div>
              );
            })}
          </div>
        ) : (
          <button
            onClick={close}
            className="text-xl text-blue-500 xl:p-3 py-3 px-2 h-12 flex items-center justify-center  hover:bg-blue-500 hover:text-white transition border-r lg:border-none border-gray-200"
          >
            <FaTag />
          </button>
        )}
      </div>

      {show && (
        <div
          onMouseLeave={handleClose}
          className="absolute right-0 mx-auto mt-0 w-72 bg-white input-entry px-3 pt-3 rounded-sm z-10"
        >
          <AddProjectForm handleSubmit={handleSubmit} boxFor={"tag"} />
          <AddProjectSuggest
            handleAdd={handleAdd}
            projects={tagSuggest}
            boxFor={"tag"}
          />
        </div>
      )}
    </div>
  );
};

export default AddTag;
