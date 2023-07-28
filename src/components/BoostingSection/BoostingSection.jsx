import React from "react";
import BackgroundAnimated from "../BackgroundAnimated/BackgroundAnimated";
import GridLayout from "../GridLayout/GridLayout";
import PreferencePanel from "../PreferencePanel/PreferencePanel";
import { convertColor } from "../../utils";
import { serverForm, queueForm } from "./data";
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
              <PreferencePanel
                title={serverForm.title}
                formName={serverForm.name}
                form={serverForm}
                color={colorFormatted}
                type="chip"
              />
              <PreferencePanel
                title={queueForm.title}
                formName={queueForm.name}
                form={queueForm}
                color={colorFormatted}
              />
            </GridLayout>
          </GridLayout>
        </section>
      </BackgroundAnimated>
    </>
  );
};

export default BoostingSection;
