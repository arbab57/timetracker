import React from "react";
import Navigation from "./navigation";
import AddEntry from "./addEntry";
import ContainerEntries from "./containerEntries";

const mainContent = ({ isSideOpen, setIsSideOpen }) => {
  return (
    <div className="flex">
      <Navigation isSideOpen={isSideOpen} setIsSideOpen={setIsSideOpen} />
      <ContainerEntries />
    </div>
  );
};

export default mainContent;
