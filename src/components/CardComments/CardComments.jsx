import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { FaUserSecret } from "react-icons/fa";
import "./CardComments.style.scss";
import { titlOptions } from "../../utils";

const options = titlOptions();

const CardComments = ({ data, languaje, color }) => {
  const { name, img, description } = data;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, []);

  return (
    <section
      className="card-comments__box"
      ref={tilt}
      style={{ "--cl": color }}
    >
      <section className="card-comments"></section>
      <section className="card-comments__elements img">
        {img ? <img src={img} alt="avatar" /> : <FaUserSecret />}
      </section>
      <section className="card-comments__elements name">
        <p>{name}</p>
      </section>
      <section className="card-comments__elements text">
        <p>{description[languaje]}</p>
      </section>
    </section>
  );
};

export default CardComments;
