import React, { useState } from "react";
import { iconList } from "./data";
import { FaPlus } from "react-icons/fa";
import "./IconsPanel.style.scss";

const IconsPanel = () => {
  const [togglePanel, setTogglePanel] = useState(false);
  const isPanelOpen = togglePanel ? "open" : "close";
  return (
    <>
      <FaPlus
        className={`icon-plus ${isPanelOpen}`}
        onClick={() => setTogglePanel(!togglePanel)}
      />
      <section className={`float__icons__panel ${isPanelOpen}`}>
        {iconList.slice(0, 3).map(({ img, link }, index) => (
          <a key={index} href={link} target="_blank" rel="noreferrer">
            <img src={img} alt="icon" />
          </a>
        ))}
        <section className="divisor" />
        {iconList.slice(3, iconList.length).map(({ img, link }, index) => (
          <a key={index} href={link} target="_blank" rel="noreferrer">
            <img src={img} alt="icon" />
          </a>
        ))}
      </section>
    </>
  );
};

export default IconsPanel;
