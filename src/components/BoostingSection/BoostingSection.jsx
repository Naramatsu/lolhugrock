import React from "react";
import BackgroundAnimated from "../BackgroundAnimated/BackgroundAnimated";
import CardDivision from "../CardDivision/CardDivision";
import GridLayout from "../GridLayout/GridLayout";
import Panel from "../Panel/Panel";
import PreferencePanel from "../PreferencePanel/PreferencePanel";
import { convertColor } from "../../utils";
import {
  formAdditionalPreferences,
  formBoostingRank,
  formPreferences,
} from "./data";
import "./BoostingSection.style.scss";
import Footer from "../Footer/Footer";
import OrderSummary from "../OrderSummary/OrderSummary";

const BoostingSection = ({ title, color }) => {
  const colorFormatted = convertColor(color);
  return (
    <>
      <BackgroundAnimated color={colorFormatted}>
        <section className="boosting__section">
          <h2 style={{ color: colorFormatted }}>{title}</h2>
          <GridLayout template="2fr 1fr">
            <GridLayout template="1fr 1fr">
              {formPreferences.map((form, index) => (
                <PreferencePanel
                  key={index}
                  type={form.type}
                  title={form.title}
                  formName={form.name}
                  form={form}
                  color={colorFormatted}
                  shape={form.shape}
                />
              ))}
              <GridLayout template="3fr" gridColumn="span 2">
                <PreferencePanel
                  type={formAdditionalPreferences.type}
                  title={formAdditionalPreferences.title}
                  formName={formAdditionalPreferences.name}
                  form={formAdditionalPreferences}
                  color={colorFormatted}
                />
              </GridLayout>
              <GridLayout template="3fr" gridColumn="span 2">
                <Panel title="Boosting Rank" color={colorFormatted}>
                  {formBoostingRank.map((form, index) => (
                    <CardDivision
                      key={index}
                      title={form.title}
                      formName={form.name}
                      label={form.label}
                      items={form.items}
                    />
                  ))}
                </Panel>
              </GridLayout>
            </GridLayout>
            <OrderSummary />
          </GridLayout>
        </section>
      </BackgroundAnimated>
      <Footer color={colorFormatted} />
    </>
  );
};

export default BoostingSection;
