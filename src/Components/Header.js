import React, { useCallback, useEffect, useState } from "react";
import { Youtube_Search_Url } from "../Utiles/Constant";
import { FaMicrophone } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleExpansion } from "../Utiles/SidebarSlice";
import { cacheResults } from "../Utiles/SearchSlice";
import { NavLink } from "react-router-dom";
import logo from "../youtube-logo-icon.svg"



const YoutubeLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 90 20"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    aria-hidden="true"
    width="90"
    height="20"
    className="block"
  >
    <g>
      <path
        d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z"
        fill="#FF0000"
      />
      <path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white" />
    </g>
    <g>
      <path d="M34.6024 13.0036L31.3945 1.41846H34.1932L35.3174 6.6701C35.6043 7.96361 35.8136 9.06662 35.95 9.97913H36.0323C36.1264 9.32532 36.3381 8.22937 36.665 6.68892L37.8291 1.41846H40.6278L37.3799 13.0036V18.561H34.6001V13.0036H34.6024Z" fill="white" />
      <path d="M41.4697 18.1937C40.9053 17.8127 40.5031 17.22 40.2632 16.4157C40.0257 15.6114 39.9058 14.5765 39.9058 13.3092V11.3703C39.9058 10.0812 40.0422 9.03516 40.3125 8.23398C40.5853 7.4328 41.0135 6.84832 41.6001 6.48052C42.1867 6.11272 42.9499 5.92882 43.8892 5.92882C44.8073 5.92882 45.5564 6.11748 46.1361 6.4948C46.7182 6.87213 47.1369 7.46608 47.3963 8.27673C47.6558 9.08738 47.7867 10.1293 47.7867 11.4026V13.3068C47.7867 14.5765 47.6605 15.6161 47.4088 16.4252C47.1571 17.2343 46.7395 17.8246 46.1572 18.1984C45.5749 18.5765 44.8026 18.7627 43.8416 18.7627C42.8594 18.7651 42.0341 18.5765 41.4697 18.1937ZM44.6353 16.2323C44.842 15.8032 44.9469 15.1106 44.9469 14.1567V10.5765C44.9469 9.64476 44.842 8.96338 44.6353 8.52918C44.4285 8.09498 44.0945 7.87788 43.6352 7.87788C43.1878 7.87788 42.8625 8.09498 42.6558 8.52918C42.449 8.96338 42.3466 9.64476 42.3466 10.5765V14.1567C42.3466 15.1106 42.449 15.8055 42.6535 16.2323C42.8602 16.6641 43.1948 16.8812 43.6541 16.8812C44.1133 16.8812 44.4285 16.6641 44.6353 16.2323Z" fill="white" />
      <path d="M56.8154 18.5634H54.6094L54.3648 17.0338H54.3037C53.7039 18.1871 52.8055 18.7627 51.6061 18.7627C50.7613 18.7627 50.1192 18.4895 49.6741 17.9384C49.2314 17.3873 49.0078 16.5423 49.0078 15.4036V6.17041H51.8066V15.1765C51.8066 15.7088 51.8807 16.0994 52.0311 16.3471C52.1815 16.5949 52.4106 16.7176 52.7188 16.7176C52.9796 16.7176 53.2262 16.6337 53.4612 16.4635C53.6962 16.2957 53.8724 16.0828 53.992 15.8292V6.17041H56.8154V18.5634Z" fill="white" />
      <path d="M64.4755 3.68758H61.6768V18.5629H58.9181V3.68758H56.1194V1.42041H64.4755V3.68758Z" fill="white" />
      <path d="M72.6499 18.5634H70.4439L70.1993 17.0338H70.1382C69.5384 18.1871 68.64 18.7627 67.4406 18.7627C66.5958 18.7627 65.9537 18.4895 65.5086 17.9384C65.0659 17.3873 64.8423 16.5423 64.8423 15.4036V6.17041H67.6411V15.1765C67.6411 15.7088 67.7152 16.0994 67.8656 16.3471C68.016 16.5949 68.2451 16.7176 68.5533 16.7176C68.8141 16.7176 69.0608 16.6337 69.2957 16.4635C69.5307 16.2957 69.7069 16.0828 69.8265 15.8292V6.17041H72.6499V18.5634Z" fill="white" />
      <path d="M80.6586 8.04782C80.3831 7.26862 79.9338 6.68414 79.3092 6.29634C78.6869 5.90854 77.9237 5.71338 77.0236 5.71338C76.3178 5.71338 75.6644 5.90148 75.0634 6.27582C74.4647 6.65016 73.9988 7.15696 73.6638 7.79386V0.614258H70.9651V18.5765H73.2781L73.5765 17.3256H73.6376C73.9424 17.8037 74.3676 18.1746 74.9119 18.4384C75.4562 18.7021 76.0501 18.834 76.6936 18.834C77.981 18.834 78.9399 18.2895 79.5692 17.2006C80.1985 16.1117 80.5132 14.4891 80.5132 12.3328V11.4279C80.5765 9.77422 80.4096 8.44178 80.6586 8.04782ZM77.5364 12.7229C77.5364 13.7446 77.4872 14.5491 77.3912 15.1364C77.2952 15.7237 77.1386 16.1398 76.9272 16.3829C76.7158 16.626 76.4344 16.7487 76.0855 16.7487C75.8224 16.7487 75.5782 16.6883 75.3525 16.5651C75.1269 16.442 74.9449 16.2647 74.8062 16.0381V8.8257C74.9167 8.46442 75.1081 8.16536 75.3807 7.92852C75.6534 7.69168 75.9543 7.57326 76.2837 7.57326C76.6326 7.57326 76.907 7.70116 77.107 7.95696C77.307 8.21276 77.4495 8.65696 77.5364 9.28566V12.7229Z" fill="white" />
      <path d="M84.6834 8.63918C84.875 8.07578 85.1774 7.65158 85.5928 7.36428C86.0082 7.07698 86.5148 6.93338 87.1148 6.93338V9.55498C86.3774 9.48958 85.7422 9.62258 85.2098 9.95178C84.6774 10.281 84.3234 10.7922 84.148 11.4872V18.5634H81.3492V6.17041H83.5552L83.9528 8.41478H84.0139C84.1687 8.04516 84.3976 7.67816 84.6834 8.63918Z" fill="white" />
      <path d="M88.0614 18.3536C87.4802 17.9978 87.0636 17.4142 86.8116 16.6052C86.5765 15.7962 86.448 14.7555 86.448 13.4882V11.4955C86.448 10.1823 86.5765 9.11146 86.848 8.28292C87.1195 7.45438 87.5478 6.84572 88.1344 6.45792C88.721 6.07012 89.4842 5.87622 90.4235 5.87622C91.3616 5.87622 92.1107 6.06488 92.669 6.44220C93.2273 6.81952 93.6319 7.41348 93.8836 8.22412C94.1377 9.03478 94.2639 10.0767 94.2639 11.3500V12.8795H89.1862V13.7446C89.1862 14.7203 89.2697 15.4271 89.4389 15.8661C89.6081 16.3027 89.9002 16.5222 90.3156 16.5222C90.6173 16.5222 90.8546 16.4312 91.0283 16.2492C91.202 16.0672 91.3239 15.7773 91.3938 15.3801C91.4637 14.9829 91.4986 14.4488 91.4986 13.7776V12.9926H94.2345V13.6448C94.2345 15.4319 93.8389 16.7697 93.0477 17.6578C92.2565 18.5459 91.1344 18.99 89.6811 18.99C88.9121 18.7627 88.3988 18.5634 88.0614 18.3536ZM89.1862 11.1516H91.5785V10.5765C91.5785 9.65896 91.4959 8.98652 91.3309 8.55232C91.1659 8.11812 90.876 7.90102 90.4606 7.90102C90.0452 7.90102 89.7529 8.12288 89.5832 8.56656C89.4136 9.01024 89.3286 9.69636 89.3286 10.6247V11.1516H89.1862Z" fill="white" />
    </g>
  </svg>
);


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
