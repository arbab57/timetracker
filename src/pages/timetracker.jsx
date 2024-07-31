import React, { useState } from "react";
import Header from "../components/header";
import MainContent from "../components/mainContent";

const timetracker = () => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth > 700 ? false : true
  );
  const [isSideOpen, setIsSideOpen] = useState(
    window.innerWidth > 700 ? true : false
  );
  window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
      setIsSideOpen(true);
      setIsMobile(false);
    } else {
      setIsSideOpen(false);
      setIsMobile(true);
    }
  });

  return (
    <>
      <Header />
      <MainContent
        isSideOpen={isSideOpen}
        setIsSideOpen={setIsSideOpen}
        isMobile={isMobile}
        setIsMobile={setIsMobile}
      />
    </>
  );
};

export default timetracker;
