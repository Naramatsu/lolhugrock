import React from "react";
import "./Banner.style.scss";

const Banner = ({ side, children, img, title }) => (
  <section className="banner">
    <img className="banner__img" src={img} alt="banner" />
    {title ? (
      <h3 className="banner__title">{title}</h3>
    ) : (
      <section className="banner__content" style={{ [side]: "5%" }}>
        {children}
      </section>
    )}
  </section>
);

export default Banner;
