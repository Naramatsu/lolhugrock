import React from "react";
import "./Panel.style.scss";

const Panel = ({ title, color, children }) => (
  <section className={`preference__panel`} style={{ "--cl": color }}>
    <p className="preference__panel__title" style={{ background: color }}>
      {title}
    </p>
    <section className="form__container">{children}</section>
  </section>
);

export default Panel;
