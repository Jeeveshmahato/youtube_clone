import React, { useState } from "react";
import { Menus } from "../Utiles/Constant";

const Menu = () => {
  const [active, setActive] = useState("All");

  return (
    <div className="flex gap-2 overflow-x-auto py-2 px-4 bg-[#0f0f0f] sticky top-14 z-40 scrollbar-hide border-b border-[#272727]">
      {Menus.map((menu) => (
        <button
          key={menu}
          onClick={() => setActive(menu)}
          className={`px-3 sm:px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors min-h-[36px] sm:min-h-[44px] ${
            active === menu
              ? "bg-white text-black"
              : "bg-[#272727] text-white hover:bg-[#3a3a3a]"
          }`}
        >
          {menu}
        </button>
      ))}
    </div>
  );
};

export default Menu;
