import React from "react";
import CardInfo from "../CardInfo";
import Header from "../Header";
import Title from "../Title";
import "./Boosting.style.scss";

const list = [
  {
    path: "divisionboost",
    title: "Division Boost",
    color: "purple",
  },
  {
    path: "placement",
    title: "Placement",
    color: "blue",
  },
  {
    path: "netwins",
    title: "Net Wins",
    color: "green",
  },
];

const Boosting = () => {
  return (
    <>
      <Header />
      <section className="boosting">
        <Title title="Boosting" />
        <section className="cardinfo__group container">
          {list.map(({ title, color, path }, index) => (
            <CardInfo key={index} title={title} color={color} path={path}>
              <p>
                ¿Elo bajo? ¿Quieres subir de liga mientras estudias, trabajas o
                haces cualquier otra cosa?
              </p>
              <br />
              <p>
                Contamos con jugadores profesionales que subiran tu cuenta hasta
                donde tú decidas, serás la envidia de tus amigos.
              </p>
            </CardInfo>
          ))}
        </section>
      </section>
    </>
  );
};

export default Boosting;
