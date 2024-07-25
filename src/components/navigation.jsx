import React from "react";
import Sidebar from "./sidebar";
import ShortSideBar from "./shortSideBar";
import { useState } from "react";

const navigation = ({ isSideOpen, setIsSideOpen }) => {
  let nav;
  nav = isSideOpen ? (
    <Sidebar setIsSideOpen={setIsSideOpen} isSideOpen={isSideOpen} />
  ) : (
    <ShortSideBar setIsSideOpen={setIsSideOpen} isSideOpen={isSideOpen} />
  );
  return nav;
};

export default navigation;
