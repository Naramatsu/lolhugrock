import React, { useContext } from "react";
import BoostingSection from "../../layout/BoostingSection";
import CardInfo from "../../components/CardInfo";
import FormState from "../../context/form/FormState";
import Header from "../../layout/Header";
import MainBanner from "../../components/MainBanner";
import { boostingList } from "./data";
import { COLORS, ROUTES, TITLES } from "../../utils/constants";
import { LanguajeAppContext } from "../../context/languaje";
import { Switch, Route } from "react-router-dom";
import "./Boosting.style.scss";

const Boosting = () => {
  const { languaje } = useContext(LanguajeAppContext);

  return (
    <>
      <Header />
      <MainBanner path={ROUTES.BOOSTING} title={TITLES.BOOSTING}>
        <section className="cardinfo__group container">
          {boostingList[languaje].map(
            ({ title, color, path, description }, index) => (
              <CardInfo key={index} title={title} color={color} path={path}>
                {description()}
              </CardInfo>
            )
          )}
        </section>
      </MainBanner>
      <FormState>
        <Switch>
          <Route path={ROUTES.DIVISIONBOOST}>
            <BoostingSection
              title={TITLES.DIVISIONBOOST}
              color={COLORS.PURPLE}
            />
          </Route>
          <Route path={ROUTES.PLACEMENTS}>
            <BoostingSection title={TITLES.PLACEMENTS} color={COLORS.BLUE} />
          </Route>
          <Route path={ROUTES.NETWINS}>
            <BoostingSection title={TITLES.NETWINS} color={COLORS.GREEN} />
          </Route>
        </Switch>
      </FormState>
    </>
  );
};

export default Boosting;
