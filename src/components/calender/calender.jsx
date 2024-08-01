import React, { useState, useContext } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useRef } from "react";
import AddCalenderEvent from "./addCalenderEvent";
import DelCalenderEvent from "./delCalenderEvent";
import { SideContext } from "../layout/mainContent";

const Calender = () => {
  const isSideOpen = useContext(SideContext);

  const calendarRef = useRef(null);
  const [events, setEvents] = useState([
    { title: "Event 1", date: "2024-08-01" },
  ]);
  const [showAdd, setShowAdd] = useState(false);
  const [showDel, setShowDel] = useState(false);

  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");

  let demo = [
    { title: "Event 1", date: "2024-08-01" },
    { title: "Event 2", date: "2024-08-02" },
  ];

  const handleAddEvent = (dateClicked) => {
    setDate(dateClicked);
    setShowAdd(true);
  };

  const handleChangeEvent = (title) => {
    setTitle(title);
    setShowDel(true);
  };

  const handleChangeView = (viewName) => {
    if (calendarRef.current) {
      calendarRef.current.getApi().changeView(viewName);
    }
  };
  return (
    <div className="sm:px-5 px-3 w-full py-24">
      {showDel && (
        <DelCalenderEvent
          setShowDel={setShowDel}
          setEvents={setEvents}
          events={events}
          title={title}
        />
      )}
      {showAdd && (
        <AddCalenderEvent
          setShowAdd={setShowAdd}
          setEvents={setEvents}
          date={date}
        />
      )}
      <div>
        <FullCalendar
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          height={625}
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={isSideOpen ? "dayGridMonth" : "dayGridMonth"}
          events={events}
          editable={true}
          selectable={true}
          eventClick={(info) => {
            handleChangeEvent(info.event.title);
          }}
          dateClick={(info) => {
            handleAddEvent(info.dateStr);
          }}
        />
      </div>
    </div>
  );
};

export default Calender;
