import React, { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import VanillaTilt from "vanilla-tilt";
import { Link } from "react-router-dom";
import { titlOptions } from "../../utils";
import "./CardInfo.style.scss";

const options = titlOptions();

const CardInfo = ({ title, color, path, children }) => {
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, []);

  return (
    <section className="cardinfo__box" ref={tilt}>
      <section className="cardinfo"></section>
      <h3 className={`cardinfo__title ${color}`}>{title}</h3>
      <section className="cardinfo__content">{children}</section>
      <Link to={path} className={`icon ${color}`}>
        <FaArrowRight />
      </Link>
    </section>
  );
};

export default CardInfo;
