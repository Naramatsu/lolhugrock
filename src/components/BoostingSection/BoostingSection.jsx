import React from "react";
import BackgroundAnimated from "../BackgroundAnimated/BackgroundAnimated";
import GridLayout from "../GridLayout/GridLayout";
import PreferencePanel from "../PreferencePanel/PreferencePanel";
import { convertColor } from "../../utils";
import { formPreferences } from "./data";
import "./BoostingSection.style.scss";

const BoostingSection = ({ title, color }) => {
  const colorFormatted = convertColor(color);
  return (
    <>
      <BackgroundAnimated>
        <section className="boosting__section">
          <h2 style={{ color: colorFormatted }}>{title}</h2>
          <GridLayout template="2fr 1fr">
            <GridLayout template="50% 50%">
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
            </GridLayout>
          </GridLayout>
        </section>
      </BackgroundAnimated>
    </>
  );
};

export default BoostingSection;
