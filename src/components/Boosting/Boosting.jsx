import React from "react";
import CardInfo from "../CardInfo";
import Title from "../Title";
import Header from "../Header";
import { Switch, Route, Link } from "react-router-dom";
import { list } from "./data";
import BoostingSection from "../BoostingSection/BoostingSection";
import "./Boosting.style.scss";

const Boosting = () => {
  return (
    <>
      <Header />
      <section className="boosting">
        <Link to="/boosting">
          <Title title="Boosting" />
        </Link>
        <section className="cardinfo__group container">
          {list.map(({ title, color, path, description }, index) => (
            <CardInfo key={index} title={title} color={color} path={path}>
              {description()}
            </CardInfo>
          ))}
        </section>
      </section>
      <Switch>
        <Route exact path="/boosting/divisionboost">
          <BoostingSection title="Division Boost" color="purple" />
        </Route>
      </Switch>
    </>
  );
};

export default Boosting;
