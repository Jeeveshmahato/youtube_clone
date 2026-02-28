import React, { useState } from "react";
import { Menus } from "../Utiles/Constant";

const Menu = () => {
  const [active, setActive] = useState("All");

  return (
    <div className="flex gap-3 overflow-x-auto py-3 px-4 bg-[#0f0f0f] sticky top-14 z-40 scrollbar-hide">
      {Menus.map((menu) => (
        <button
          key={menu}
          onClick={() => setActive(menu)}
          className={`px-3 py-1.5 text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${
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
