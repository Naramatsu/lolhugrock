import React, { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import VanillaTilt from "vanilla-tilt";
import "./CardInfo.style.scss";

const options = {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 0.5,
};

const CardInfo = ({ title, color, path, children }) => {
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, []);

  return (
    <section className="cardinfo" ref={tilt}>
      <h3 className={`cardinfo__title ${color}`}>{title}</h3>
      <section className="cardinfo__content">{children}</section>
      <FaArrowRight className={`icon ${color}`} />
    </section>
  );
};

export default CardInfo;
