import React from "react";
import "./Title.style.scss";

const Title = ({ title }) => (
  <section className="title container">
    <h2>{title}</h2>
  </section>
);

export default Title;
