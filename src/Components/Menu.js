import React from "react";
import { Menus } from "../Utiles/Constant";
const Menu = () => {
  return (
    <>
     <div className=" flex justify-between w-full bg-black">
     {Menus.map((menu) => {
        return (
          <>
            <button className=" px-2 py-1 text-white bg-gray-700 rounded-md" key={menu}>{menu}</button>
          </>
        );
      })}
     </div>
    </>
  );
};

export default Menu;
