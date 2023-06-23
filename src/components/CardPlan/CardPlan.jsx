import React from "react";
import classnames from "classnames";
import "./CardPlan.style.scss";
import { useHistory } from "react-router-dom";

const CardPlan = ({ title, children }) => {
  const history = useHistory();
  const titleClassNames = classnames(
    "card__plan__title",
    title === "boosting" ? "boosting-text" : "coaching-text"
  );
  const typeClassNames = classnames(
    "card__plan__btn btn",
    title === "boosting" ? "purple" : "green"
  );
  return (
    <section className="card__plan">
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
