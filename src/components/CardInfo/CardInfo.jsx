import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./CardInfo.style.scss";

const CardInfo = ({ title, color, path, children }) => {
  return (
    <section className="cardinfo">
      <h3 className={`cardinfo__title ${color}`}>{title}</h3>
      <section className="cardinfo__content">{children}</section>
      <FaArrowRight className={`icon ${color}`} />
    </section>
  );
};

export default CardInfo;
