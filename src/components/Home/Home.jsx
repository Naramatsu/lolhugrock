import React from "react";
import CardPlan from "../CardPlan";
import Title from "../Title";
import logo from "../../assets/Logo.png";
import "./Home.style.scss";
import { plans } from "./data";

const Home = () => (
  <section role="main" className="home">
    <img className="logo main" src={logo} alt="logo" />
    <Title title="¿CUAL ES TU SERVICIO REQUERIDO?" />
    <section className="cards__plans__group container">
      {plans.map(({ title, content }, index) => (
        <CardPlan key={index} title={title}>
          {content()}
        </CardPlan>
      ))}
    </section>
  </section>
);

export default Home;
