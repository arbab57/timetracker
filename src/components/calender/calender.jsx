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
    "http://localhost:8000/calander/data", [], [showAdd, showDel]
  );


  const handleAddEvent = (dateClicked) => {
    setDate(dateClicked);
    setShowAdd(true);
  };

  const handleChangeEvent = (id) => {
    setTitle(id);
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
              events={data}
              id={title}
            />
          )}
          {showAdd && (
            <AddCalenderEvent
              setShowAdd={setShowAdd}
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
              events={data}
              editable={true}
              selectable={true}
              eventClick={(info) => {
                handleChangeEvent(info.event._def.extendedProps._id);
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
