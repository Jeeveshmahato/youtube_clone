import React from "react";
import { Youtube_Icon } from "../Utiles/Constant";
import { FaMicrophone } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleExpansion } from "../Utiles/SidebarSlice";
const Header = () => {
  const dispatch = useDispatch();
  const toggleMenu = () => {
    dispatch(toggleExpansion());
  };
  return (
    <>
      <header className="flex items-center justify-between bg-black text-white px-4 py-2">
        {/* Left Section - Menu and Logo */}
        <div className="flex items-center space-x-4">
          {/* Menu Icon */}
          <button
            onClick={toggleMenu}
            className="p-2 rounded hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path
                d="M3 6h18M3 12h18M3 18h18"
                strokeWidth="2"
                stroke="white"
              />
            </svg>
          </button>

          {/* Logo */}
          <div className="flex items-center">
            <img src={Youtube_Icon} alt="youtube logo" />
            <span className="ml-2 text-xl font-semibold">YouTube</span>
            <span className="text-xs text-gray-400 ml-1">IN</span>
          </div>
        </div>

        {/* Center Section - Search Bar */}
        <div className="flex flex-1 items-center justify-center mx-4 max-w-xl">
          <div className="flex w-full bg-black border border-[#303030] rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="flex-grow px-4 py-2 bg-transparent text-white outline-none placeholder-gray-400"
            />
            <button className="p-2 bg-transparent hover:bg-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm5-8h1a6 6 0 1 0-1.93 4.42L18 19.3l1.3-1.29-3.3-3.3A5.97 5.97 0 0 0 15 10z" />
              </svg>
            </button>
          </div>
          <button className="ml-2 p-2 bg-gray-700 hover:bg-gray-600 rounded-full">
            <FaMicrophone />
          </button>
        </div>

        {/* Right Section - Icons */}
        <div className="flex items-center space-x-4">
          {/* Create Icon */}
          <button className="p-2 hidden rounded hover:bg-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M19 10h-5V5h-2v5H5v2h7v5h2v-5h5z" />
            </svg>
          </button>

          {/* Notifications Icon */}
          <button className="p-2 hidden rounded hover:bg-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M12 22c1.1 0 2-.9 2-2H10c0 1.1.9 2 2 2zm6-6V9c0-3.07-1.63-5.64-4.5-6.32V2h-3v.68C7.63 3.36 6 5.92 6 9v7l-2 2v1h16v-1l-2-2zm-2 .1H8V9c0-2.48 1.51-4.6 3.8-5.12v.38h.4v-.38c2.29.52 3.8 2.64 3.8 5.12v7.1z" />
            </svg>
          </button>

          {/* Profile Icon */}
          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center font-semibold">
            J
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;