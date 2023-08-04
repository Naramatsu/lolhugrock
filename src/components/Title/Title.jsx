import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import "./Title.style.scss";
import { titlOptions } from "../../utils";

const options = titlOptions({ max: 5 });

const Title = ({ title }) => {
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, []);

  return (
    <section className="title container" ref={tilt}>
      <h2>{title}</h2>
    </section>
  );
};

export default Title;
