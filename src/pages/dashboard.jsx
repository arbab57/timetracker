import React, { useState } from "react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import AddEntry from "../components/addEntry";
import ContainerEntries from "../components/containerEntries";
import Navigation from "../components/navigation";
import Loading from "./loading";
import MainContent from "../components/mainContent";

const dashboard = () => {
  const [isSideOpen, setIsSideOpen] = useState(true);
  return (
    <>
      <Header />
      <MainContent isSideOpen={isSideOpen} setIsSideOpen={setIsSideOpen} />
      {/* <Navigation isSideOpen={isSideOpen} setIsSideOpen={setIsSideOpen} />
      <AddEntry isSideOpen={isSideOpen} />
      <ContainerEntries isSideOpen={isSideOpen} /> */}
      {/* <Loading /> */}
    </>
  );
};

export default dashboard;
