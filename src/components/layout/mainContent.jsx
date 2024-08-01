import Navigation from "./navigation";
import React, { createContext } from "react";

export const SideContext = createContext();

const mainContent = ({
  isSideOpen,
  setIsSideOpen,
  isMobile,
  setIsMobile,
  Outlet,
}) => {
  return (
    <div className="flex">
      <span
        id="checker"
        className="fixed top-0 left-0 opacity-0 md:text-xs text-sm"
      ></span>
      <Navigation
        isSideOpen={isSideOpen}
        setIsSideOpen={setIsSideOpen}
        isMobile={isMobile}
        setIsMobile={setIsMobile}
      />
      <SideContext.Provider value={isSideOpen}>
        <Outlet />
      </SideContext.Provider>
    </div>
  );
};

export default mainContent;
