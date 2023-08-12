import React from "react";
import BackgroundAnimated from "../BackgroundAnimated/BackgroundAnimated";
import CardDivision from "../CardDivision/CardDivision";
import Footer from "../Footer/Footer";
import GridLayout from "../GridLayout/GridLayout";
import OrderSummary from "../OrderSummary/OrderSummary";
import Panel from "../Panel/Panel";
import PreferencePanel from "../PreferencePanel/PreferencePanel";
import { convertColor, formRankBuilder } from "../../utils";
import { formAdditionalPreferences, formPreferences } from "./data";
import "./BoostingSection.style.scss";

const BoostingSection = ({ title, color }) => {
  const colorFormatted = convertColor(color);
  const formRank = formRankBuilder(title);
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
                  title={title}
                  formName={form.name}
                  form={form}
                  color={colorFormatted}
                  shape={form.shape}
                />
              ))}
              <GridLayout template="3fr" gridColumn="span 2">
                <PreferencePanel
                  type={formAdditionalPreferences.type}
                  title={title}
                  formName={formAdditionalPreferences.name}
                  form={formAdditionalPreferences}
                  color={colorFormatted}
                />
              </GridLayout>
              <GridLayout template="3fr" gridColumn="span 2">
                <Panel title={title} color={colorFormatted}>
                  {formRank.map((form, index) => (
                    <CardDivision
                      key={index}
                      title={title}
                      formName={form.name}
                      label={form.label}
                      items={form.items}
                      type={form.type}
                      color={colorFormatted}
                      max={form.max}
                      min={form.min}
                    />
                  ))}
                </Panel>
              </GridLayout>
            </GridLayout>
            <OrderSummary color={colorFormatted} />
          </GridLayout>
        </section>
      </BackgroundAnimated>
      <Footer color={colorFormatted} />
    </>
  );
};

export default BoostingSection;
