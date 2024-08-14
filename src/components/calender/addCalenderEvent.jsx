import { useRef, useState } from "react";
const AddCalenderEvent = ({ setShowAdd, date, setEvents }) => {
  const nameRef = useRef(null);
  const colorRef = useRef(null);
  const url = import.meta.env.VITE_calender_api_addEntry

  const handleSubmit = async () => {
  try {
    const AccessToken = localStorage.getItem("accessToken");
    if (nameRef.current.value !== "") {

      const newEntry = {
        title: nameRef.current.value,
        date: date,
        color: colorRef.current.value,
      };
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authentication: `Bearer ${AccessToken}`,
        },
        body: JSON.stringify(newEntry),
      });
      setShowAdd(false);

    }
  } catch (error) {
    console.log(error.message)
  }

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
        <div
          className="flex flex-col gap-5"
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

          <button onClick={() => handleSubmit()} className="px-5 py-2 bg-blue-500 text-white rounded-sm">
            Add Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCalenderEvent;
