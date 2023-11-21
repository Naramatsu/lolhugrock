import React from "react";
import { iconList } from "./data";
import "./IconsPanel.style.scss";

const IconsPanel = () => (
  <section className="float__icons__panel">
    {iconList.map(({ img, link }, index) => (
      <a href={link} target="_blank" rel="noreferrer">
        <img key={index} src={img} alt="icon" />
      </a>
    ))}
  </section>
);

export default IconsPanel;
