import React from "react";
import "./GridLayout.style.scss";

const GridLayout = ({ children, template, gridColumn, classNames = "" }) => (
  <section
    className={`grid ${classNames}`}
    style={{ gridTemplateColumns: template, gridColumn }}
  >
    {children}
  </section>
);

export default GridLayout;
