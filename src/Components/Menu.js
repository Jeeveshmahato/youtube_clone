import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Menus } from "../Utiles/Constant";
import { setActiveFilter } from "../Utiles/VideoSlice";

const Menu = () => {
  const dispatch = useDispatch();
  const active = useSelector((store) => store.MyVideos.activeFilter);

  const handleFilterClick = (menu) => {
    dispatch(setActiveFilter(menu));
  };

  return (
    <div className="relative bg-[#0f0f0f] sticky top-14 z-40 border-b border-[#272727]">
      <div className="flex gap-2 overflow-x-auto py-2 px-4 pr-10 scrollbar-hide">
        {Menus.map((menu) => (
          <button
            key={menu}
            onClick={() => handleFilterClick(menu)}
            className={`px-3 sm:px-4 py-1.5 text-sm font-medium rounded-lg whitespace-nowrap transition-colors min-h-[32px] sm:min-h-[36px] ${
              active === menu
                ? "bg-white text-black"
                : "bg-[#272727] text-white hover:bg-[#3a3a3a]"
            }`}
          >
            {menu}
          </button>
        ))}
      </div>
      {/* Right fade overlay so buttons don't stick to screen edge */}
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0f0f0f] to-transparent pointer-events-none" />
    </div>
  );
};

export default Menu;
