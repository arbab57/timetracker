import React, { useState, useContext, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useRef } from "react";
import AddCalenderEvent from "./addCalenderEvent";
import DelCalenderEvent from "./delCalenderEvent";
import { SideContext } from "../layout/mainContent";
import UseFetch from "../hooks/useFetch";
import Loading from "../../pages/loading";
import UseAccessToken from "../hooks/useAccessToken";

const Calender = () => {
  const isSideOpen = useContext(SideContext);
  const calendarRef = useRef(null);
  const [showAdd, setShowAdd] = useState(false);
  const [showDel, setShowDel] = useState(false);
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");

  const [accessToken] = UseAccessToken();

  const [data, error, loading] = UseFetch(
    "http://localhost:3000/calander/data",
    [
      { title: "Event 2", date: "2024-08-02" },
      { title: "Event 2", date: "2024-08-02" },
    ]
  );
  const [events, setEvents] = useState(data);

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

  return (
    <div className="sm:px-5 px-3 w-full py-24">
      {loading ? (
        <Loading />
      ) : (
        <div>
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
      )}
    </div>
  );
};

export default Calender;
