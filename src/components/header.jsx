import React, { useState } from "react";
import Logo from "./logo";
import Menus from "./menus";
import Toast from "./toast";
const header = () => {
  const [showToast, setShowToast] = useState(false);
  return (
    <header className="flex justify-between items-center border-b border-gray-300 sm:px-5 px-2 py-2 h-16 fixed top-0 z-20 bg-white shadow-sm w-full">
      <Logo />
      <Menus />
      <button
        onClick={() => {
          setShowToast(true);
        }}
      >
        click
      </button>
      {showToast && (
        <Toast
          message={"success"}
          severity={"success"}
          onClose={() => setShowToast(false)}
        />
      )}
    </header>
  );
};
export default header;
