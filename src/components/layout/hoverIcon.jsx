import { useState } from "react";

const HoverMenu = ({ icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center">{icon}</button>

      {isOpen && (
        <div className="absolute right-0 mt-0 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
          >
            Option 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
          >
            Option 2
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
          >
            Option 3
          </a>
        </div>
      )}
    </div>
  );
};

export default HoverMenu;
