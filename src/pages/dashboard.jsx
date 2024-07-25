import React, { useState } from "react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import AddEntry from "../components/addEntry";
import ContainerEntries from "../components/containerEntries";
import Navigation from "../components/navigation";
import Loading from "./loading";
import MainContent from "../components/mainContent";

const dashboard = () => {
  let width = window.innerWidth;
  const [isMobile, setIsMobile] = useState(
    window.innerWidth > 700 ? false : true
  );
  const [isSideOpen, setIsSideOpen] = useState(
    window.innerWidth > 700 ? true : false
  );

  return (
    <>
      <Header />
      <MainContent
        isSideOpen={isSideOpen}
        setIsSideOpen={setIsSideOpen}
        isMobile={isMobile}
        setIsMobile={setIsMobile}
      />
      {/* <Loading /> */}
    </>
  );
};

export default dashboard;
