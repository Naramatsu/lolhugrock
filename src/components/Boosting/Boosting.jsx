import React from "react";
import CardInfo from "../CardInfo";
import Header from "../Header";
import Title from "../Title";
import "./Boosting.style.scss";
import { Switch, Route, Link } from "react-router-dom";
import BackgroundAnimated from "../BackgroundAnimated/BackgroundAnimated";

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
        <Link to="/boosting">
          <Title title="Boosting" />
        </Link>
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
      <Switch>
        <Route exact path="/boosting/divisionboost">
          <BackgroundAnimated></BackgroundAnimated>
        </Route>
      </Switch>
    </>
  );
};

export default Boosting;
