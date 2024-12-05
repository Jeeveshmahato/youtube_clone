import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Youtube_Icon } from "../Utiles/Constant";

const Sidebar = () => {
  const menutoggle = useSelector((store) => store.expandMenu.isExpanded);
  return (
    <>
      {menutoggle && (
        <div className="w-fit bg-black text-[14px] lg:text-[16px] text-white h-full p-2 md:p-4 space-y-4">
          <div>
            {/* Section: Home */}
            <div>
              <ul className="space-y-2">
                <div className="flex md:hidden items-center">
                  <img src={Youtube_Icon} alt="youtube logo" />
                  <span className="ml-2 text-[14px] lg:text-xl font-semibold">YouTube</span>
                  <span className="text-xs text-gray-400 ml-1">IN</span>
                </div>
                <NavLink to="/">
                  <li className="flex items-center space-x-4 p-2 rounded hover:bg-gray-700 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                    </svg>
                    <span>Home</span>
                  </li>
                </NavLink>
                <li className="flex items-center space-x-4 p-2 rounded hover:bg-gray-700 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M12 4v16m8-8H4" />
                  </svg>
                  <span>Shorts</span>
                </li>
                <li className="flex items-center space-x-4 p-2 rounded hover:bg-gray-700 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M4 6h16v12H4z" />
                  </svg>
                  <span>Subscriptions</span>
                </li>
              </ul>
            </div>

            <hr className="border-gray-700" />

            {/* Section: You */}
            <div>
              <h2 className="text-gray-400 text-sm mb-2">You</h2>
              <ul className="space-y-2">
                <li className="flex items-center space-x-4 p-2 rounded hover:bg-gray-700 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M12 8v4l3 3m6-1V9a9 9 0 1 0-18 0v5l-2 2v1h20v-1l-2-2z" />
                  </svg>
                  <span>History</span>
                </li>
                <li className="flex items-center space-x-4 p-2 rounded hover:bg-gray-700 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
                  </svg>
                  <span>Playlists</span>
                </li>
                <li className="flex items-center space-x-4 p-2 rounded hover:bg-gray-700 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M4 4h16v16H4z" />
                  </svg>
                  <span>Your videos</span>
                </li>
                <li className="flex items-center space-x-4 p-2 rounded hover:bg-gray-700 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M12 4v2m0 12v2m8-8h2M4 12H2" />
                  </svg>
                  <span>Watch Later</span>
                </li>
                <li className="flex items-center space-x-4 p-2 rounded hover:bg-gray-700 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M14 10l-2-2-2 2m0 4l2 2 2-2" />
                  </svg>
                  <span>Liked videos</span>
                </li>
              </ul>
            </div>

            <hr className="border-gray-700" />

            {/* Section: Subscriptions */}
            <div>
              <h2 className="text-gray-400 text-sm mb-2">Subscriptions</h2>
              <ul className="space-y-2">
                <li className="flex items-center space-x-4 p-2 rounded hover:bg-gray-700 cursor-pointer">
                  <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                  <span>Government Job Mastery</span>
                </li>
                <li className="flex items-center space-x-4 p-2 rounded hover:bg-gray-700 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M3 6h18v12H3z" />
                  </svg>
                  <span>All subscriptions</span>
                </li>
              </ul>
            </div>

            <hr className="border-gray-700" />

            {/* Section: Explore */}
            <div>
              <h2 className="text-gray-400 text-sm mb-2">Explore</h2>
              <ul className="space-y-2">
                <li className="flex items-center space-x-4 p-2 rounded hover:bg-gray-700 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M12 2l3.5 7H21l-6 6 2.5 7L12 16 6 22l2.5-7-6-6h5.5z" />
                  </svg>
                  <span>Trending</span>
                </li>
                <li className="flex items-center space-x-4 p-2 rounded hover:bg-gray-700 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M6 4v16l12-8z" />
                  </svg>
                  <span>Shopping</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
