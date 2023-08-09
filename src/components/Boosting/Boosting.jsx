import React from "react";
import BoostingSection from "../BoostingSection/BoostingSection";
import CardInfo from "../CardInfo";
import Header from "../Header";
import Title from "../Title";
import { Switch, Route, Link } from "react-router-dom";
import { list } from "./data";
import "./Boosting.style.scss";
import FormState from "../../context/form/FormState";

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
      <FormState>
        <Switch>
          <Route exact path="/boosting/divisionboost">
            <BoostingSection title="Division Boost" color="purple" />
          </Route>
        </Switch>
      </FormState>
    </>
  );
};

export default Boosting;
