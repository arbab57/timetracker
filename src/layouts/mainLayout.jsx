import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/layout/header";
import MainContent from "../components/layout/mainContent";
import { useState } from "react";

const mainLayout = () => {
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
        Outlet={Outlet}
      />
    </>
  );
};

export default mainLayout;
