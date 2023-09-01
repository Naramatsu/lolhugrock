import React from "react";
import Title from "../Title/Title";
import { Link } from "react-router-dom";
import "./MainBanner.style.scss";

const MainBanner = ({ path, title, children }) => (
  <section className="banner__main">
    <Link to={path}>
      <Title title={title} />
    </Link>
    {children}
  </section>
);

export default MainBanner;
