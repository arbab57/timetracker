import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useRef } from "react";
import AddCalenderEvent from "./addCalenderEvent";

const Calender = () => {
  const calendarRef = useRef(null);
  const [events, setEvents] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [date, setDate] = useState("");

  let demo = [
    { title: "Event 1", date: "2024-08-01" },
    { title: "Event 2", date: "2024-08-02" },
  ];

  const handleAddEvent = (dateClicked) => {
    setDate(dateClicked);
    setShowAdd(true);
  };

  const handleChangeView = (viewName) => {
    if (calendarRef.current) {
      calendarRef.current.getApi().changeView(viewName);
    }
  };
  return (
    <div className="px-5 w-full pt-24">
      {showAdd && (
        <AddCalenderEvent
          setShowAdd={setShowAdd}
          setEvents={setEvents}
          date={date}
        />
      )}
      <div>
        <div className="flex gap-2 justify-end mb-2">
          <select
            className="bg-gray-700 text-white "
            id="view-selector"
            onChange={(e) => {
              handleChangeView(e.target.value);
            }}
            style={{ padding: "8px", fontSize: "16px" }}
          >
            <option value="dayGridMonth">Month View</option>
            <option value="timeGridWeek">Week View</option>
            <option value="timeGridDay">Day View</option>
          </select>
        </div>

        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          editable={true}
          selectable={true}
          eventClick={(info) => {}}
          dateClick={(info) => {
            handleAddEvent(info.dateStr);
          }}
        />
      </div>
    </div>
  );
};

export default Calender;
