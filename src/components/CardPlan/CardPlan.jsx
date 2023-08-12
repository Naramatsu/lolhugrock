import React, { useEffect, useRef } from "react";
import classnames from "classnames";
import VanillaTilt from "vanilla-tilt";
import { useHistory } from "react-router-dom";
import { titlOptions } from "../../utils";
import "./CardPlan.style.scss";

const options = titlOptions();

const CardPlan = ({ title, children }) => {
  const tilt = useRef(null);
  const history = useHistory();

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, []);

  const titleClassNames = classnames(
    "card__plan__title",
    title === "boosting" ? "boosting-text" : "coaching-text"
  );
  const typeClassNames = classnames(
    "card__plan__btn btn",
    title === "boosting" ? "purple" : "green"
  );

  return (
    <section className="card__plan" ref={tilt}>
      <h3 className={titleClassNames}>{title}</h3>
      <section className="card__plan__info">{children}</section>
      <button
        className={typeClassNames}
        onClick={() => history.push(`/${title}`)}
      >
        Ver Planes
      </button>
    </section>
  );
};

export default CardPlan;
