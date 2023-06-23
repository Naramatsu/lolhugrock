import React from "react";
import CardPlan from "../CardPlan";
import Title from "../Title";
import "./Home.style.scss";

const Home = () => (
  <section role="main" className="home">
    <img className="logo main" src="Logo.png" alt="logo" />
    <Title title="¿CUAL ES TU SERVICIO REQUERIDO?" />
    <section className="cards__plans__group container">
      <CardPlan title="boosting">
        <p>
          ¿Elo bajo? ¿Quieres subir de liga mientras estudias, trabajas o haces
          cualquier otra cosa?
        </p>
        <br />
        <p>
          Contamos con jugadores profesionales que subiran tu cuenta hasta donde
          tú decidas, serás la envidia de tus amigos.
        </p>
      </CardPlan>
      <CardPlan title="coaching">
        <p>
          Entrena bajo el mando de jugadores profesionales y challengers el roll
          que desees masterizar en la griteta del invocador.{" "}
        </p>
        <br />
        <p>
          Contamos con jugadores profesionales que te ayudaran en tu micro y
          macro game.
        </p>
      </CardPlan>
    </section>
  </section>
);

export default Home;
