import React from "react";
import "./GridLayout.style.scss";

const GridLayout = ({ children, template }) => (
  <section className="grid" style={{ "--template": template }}>
    {children}
  </section>
);

export default GridLayout;
