import React, { useState } from "react";
import { Ham_Menu, Ham_Submenu } from "../Portal";

const Hamburger = ({ closeHam }) => {
  const handleClick = (title, items) => {
    if (items) {
      setCurrentMenu(
        <Ham_Submenu title={title} items={items} clickes={closeHam} />
      );
    } else {
      setCurrentMenu(<Ham_Menu handleClick={handleClick} clickes={closeHam} />);
    }
  };

  const [currentMenu, setCurrentMenu] = useState(
    <Ham_Menu handleClick={handleClick} clickes={closeHam} />
  );
  const isHamSubmenu = currentMenu.type === Ham_Submenu;
  const clickBack = () => {
    setCurrentMenu(<Ham_Menu handleClick={handleClick} clickes={closeHam} />);
  };

  return (
    <div className="px-7 py-2 relative max-w-[900px] mx-auto">
      <div
        className={`bg-slate-50 flex ${
          isHamSubmenu ? "justify-between" : "justify-end"
        }`}
      >
        {isHamSubmenu && (
          <button className="navitem w-[48px] text-xl" onClick={clickBack}>
            <i className="far fa-chevron-left" />
          </button>
        )}
        <button className="navitem w-[48px] text-2xl" onClick={closeHam}>
          <i className="fa-light fa-xmark" />
        </button>
      </div>
      <div className="mt-2">{currentMenu}</div>
    </div>
  );
};

export default Hamburger;
