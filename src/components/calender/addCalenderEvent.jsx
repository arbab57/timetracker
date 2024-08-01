import { useRef, useState } from "react";
const AddCalenderEvent = ({ setShowAdd, date, setEvents }) => {
  const nameRef = useRef(null);
  const colorRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameRef.current.value !== "") {
      const newEvent = {
        title: nameRef.current.value,
        date: date,
        color: colorRef.current.value,
      };
      setEvents((prevEvents) => {
        return [...prevEvents, newEvent];
      });
    }

    setShowAdd(false);
  };
  return (
    <div className="fixed top-0 left-0 z-50 h-screen w-screen bg-black bg-opacity-40 flex  justify-center items-center ">
      <div className="flex flex-col gap-5 bg-white shadow-xl p-5 rounded-md w-72">
        <div className="flex justify-end items-center">
          <span
            onClick={() => setShowAdd(false)}
            className="font-bold text-xl bg-blue-500 p-1 px-2 cursor-pointer text-white"
          >
            X
          </span>
        </div>
        <form
          className="flex flex-col gap-5"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          action=""
        >
          <input
            ref={nameRef}
            placeholder="Event"
            className="w-full py-1 px-2 bg-slate-500 text-white"
            type="text"
            name=""
            id=""
          />
          <select
            ref={colorRef}
            className="bg-slate-500 text-white"
            name=""
            id=""
          >
            <option value="">Default(Blue)</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="black">Black</option>
          </select>

          <button className="px-5 py-2 bg-blue-500 text-white rounded-sm">
            Add Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCalenderEvent;
