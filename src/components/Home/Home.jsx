import React, { useContext } from "react";
import CardPlan from "../CardPlan";
import logo from "../../assets/Logo.png";
import Title from "../Title";
import { HOME_TITLE } from "../../utils/constants";
import { LanguajeAppContext } from "../../context/languaje";
import { plans } from "./data";
import "./Home.style.scss";

const Home = () => {
  const { languaje } = useContext(LanguajeAppContext);
  return (
    <section role="main" className="home">
      <img className="logo main" src={logo} alt="logo" />
      <Title title={HOME_TITLE[languaje]} />
      <section className="cards__plans__group container">
        {plans[languaje].map(({ title, content, path }, index) => (
          <CardPlan key={index} title={title} path={path}>
            {content()}
          </CardPlan>
        ))}
      </section>
    </section>
  );
};

export default Home;
