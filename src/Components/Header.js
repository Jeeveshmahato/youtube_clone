import React, { useCallback, useEffect, useState } from "react";
import { Youtube_Search_Url } from "../Utiles/Constant";
import { FaMicrophone } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleExpansion } from "../Utiles/SidebarSlice";
import { cacheResults } from "../Utiles/SearchSlice";
import { NavLink } from "react-router-dom";
import logo from "../youtube-logo-icon.svg"

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.mySearch);

  const toggleMenu = () => {
    dispatch(toggleExpansion());
  };

  const searchResults = useCallback(async () => {
    if (!searchText.trim()) return;
    try {
      const data = await fetch(Youtube_Search_Url + encodeURIComponent(searchText));
      if (!data.ok) return;
      const json = await data.json();
      const results = Array.isArray(json[1]) ? json[1] : [];
      setSuggestions(results);
      dispatch(cacheResults({ [searchText]: results }));
    } catch {
      // silently fail on network errors
    }
  }, [searchText, dispatch]);

  useEffect(() => {
    if (!searchText.trim()) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(() => {
      if (searchCache[searchText]) {
        setSuggestions(searchCache[searchText]);
      } else {
        searchResults();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchText, searchCache, searchResults]);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-[#0f0f0f] text-white px-4 h-14">
      {/* Left Section */}
      <div className="flex items-center gap-2 sm:gap-4 min-w-0 sm:min-w-[200px]">
        <button
          onClick={toggleMenu}
          className="p-2 rounded-full hover:bg-[#272727] transition-colors"
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
            <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z" />
          </svg>
        </button>

        <NavLink to="/" className="flex items-center gap-0.5 shrink-0">
          <img src={logo} alt="YouTube Logo" className="h-6" />
          <span className="text-[10px] text-gray-400 align-super -ml-0.5">IN</span>

         
        </NavLink>
      </div>

      {/* Center Section - Search */}
      <div className="hidden sm:flex items-center justify-center flex-1 max-w-[732px] mx-2 sm:mx-4">
        <div className="relative flex w-full">
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search"
            onFocus={() => setShowSearch(true)}
            onBlur={() => setTimeout(() => setShowSearch(false), 200)}
            className="flex-grow px-4 py-2 bg-[#121212] text-white outline-none placeholder-gray-500 border border-[#303030] rounded-l-full focus:border-blue-500 focus:ml-0 transition-colors text-base"
          />
          <button
            className="px-6 bg-[#222222] hover:bg-[#333333] border border-l-0 border-[#303030] rounded-r-full transition-colors"
            aria-label="Search"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
              <path d="M20.87 20.17l-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
            </svg>
          </button>

          {showSearch && suggestions.length > 0 && (
            <ul className="absolute top-full left-0 right-0 mt-1 bg-[#212121] rounded-xl shadow-lg border border-[#383838] overflow-hidden z-50 max-h-96 overflow-y-auto">
              {suggestions.map((item, index) => (
                <li
                  key={item + index}
                  className="flex items-center gap-3 py-2 px-4 text-white hover:bg-[#303030] cursor-pointer transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-gray-400 flex-shrink-0">
                    <path d="M20.87 20.17l-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
                  </svg>
                  <span className="truncate text-sm">{item || "No Title Available"}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <button
          className="ml-3 p-2.5 bg-[#181818] hover:bg-[#272727] rounded-full transition-colors"
          aria-label="Voice search"
        >
          <FaMicrophone className="w-4 h-4" />
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 min-w-0 sm:min-w-[200px] justify-end">
        {/* Mobile search button */}
        <button
          className="p-2 rounded-full hover:bg-[#272727] transition-colors sm:hidden"
          aria-label="Search"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
            <path d="M20.87 20.17l-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
          </svg>
        </button>

        <button
          className="p-2 rounded-full hover:bg-[#272727] transition-colors hidden sm:flex items-center gap-2"
          aria-label="Create"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
            <path d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-6v12H3V7h14zm1-1H2v14h16V6zM22 3v15h-1V4H6V3h16z" />
          </svg>
        </button>

        <button
          className="p-2 rounded-full hover:bg-[#272727] transition-colors hidden sm:block"
          aria-label="Notifications"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
            <path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V11c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v6.35l-2 2.15V20h16v-.5l-2-2.15zm-2 .65H6v-7c0-2.48 1.51-4.5 4-4.95V5.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v.55c2.49.45 4 2.47 4 4.95v7z" />
          </svg>
        </button>

        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center font-medium text-sm cursor-pointer hover:ring-2 hover:ring-purple-400/50 transition-all ml-1">
          J
        </div>
      </div>
    </header>
  );
};

export default Header;
