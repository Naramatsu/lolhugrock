import React from "react";
import BackgroundAnimated from "../BackgroundAnimated/BackgroundAnimated";
import GridLayout from "../GridLayout/GridLayout";
import PreferencePanel from "../PreferencePanel/PreferencePanel";
import { convertColor } from "../../utils";
import { serverAndQueueForm } from "./data";
import "./BoostingSection.style.scss";

const BoostingSection = ({ title, color }) => {
  const colorFormatted = convertColor(color);
  return (
    <>
      <BackgroundAnimated>
        <section className="boosting__section">
          <h2 style={{ color: colorFormatted }}>{title}</h2>
          <GridLayout>
            <GridLayout>
              {serverAndQueueForm.map((form, index) => (
                <PreferencePanel
                  key={index}
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
