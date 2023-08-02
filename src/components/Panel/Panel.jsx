import React from "react";
import "./Panel.style.scss";

const Panel = ({ title, color, children }) => (
  <section className={`preference__panel`}>
    <p className="preference__panel__title" style={{ background: color }}>
      {title}
    </p>
    <section className="form__container" style={{ "--cl": color }}>
      {children}
    </section>
  </section>
);

export default Panel;
