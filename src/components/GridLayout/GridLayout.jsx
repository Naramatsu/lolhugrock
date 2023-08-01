import React from "react";
import "./GridLayout.style.scss";

const GridLayout = ({ children, template, gridColumn }) => (
  <section
    className="grid"
    style={{ gridTemplateColumns: template, gridColumn }}
  >
    {children}
  </section>
);

export default GridLayout;
