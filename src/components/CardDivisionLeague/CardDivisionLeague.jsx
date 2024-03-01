import React from "react";
import SelectCustom from "../SelectCustom";
import {
  divisionFrameBuilder,
  divisionImgBuilder,
  isSelected,
} from "../../utils";
import {
  ANYFILL,
  FORM_TYPES,
  PREFERENCES_PROPERTIES,
} from "../../utils/constants";

const CardDivisionLeague = ({
  tilt,
  color,
  label,
  divisionSelected,
  items,
  addPreferences,
  divisionsConfig,
  preferences,
}) => {
  const colorOpacity = color + "8C";

  return (
    <section
      className="card__division"
      ref={tilt}
      style={{ "--bgOpacity": colorOpacity, "--bg": color }}
    >
      <p className="card__division__range">{label}</p>
      <img
        className="card__division__shield"
        src={divisionImgBuilder(divisionSelected)}
        alt="range"
      />
      <SelectCustom
        options={items}
        label={PREFERENCES_PROPERTIES.LEAGUE}
        onSelect={addPreferences}
        color={color}
        noImage
        noLabel
        selected={divisionSelected || ANYFILL}
      />
      {divisionsConfig[divisionSelected]?.divisions && (
        <section className="card__division__icons">
          {divisionsConfig[divisionSelected].divisions.map(
            (division, index) => (
              <p
                key={index}
                onClick={() =>
                  addPreferences(PREFERENCES_PROPERTIES.DIVISION, division)
                }
                className={`division__icon ${isSelected(
                  preferences?.division,
                  division
                )}`}
              >
                {division}
              </p>
            )
          )}
        </section>
      )}
      {divisionsConfig[divisionSelected]?.lpGroup && (
        <section className="card__division__icons">
          {divisionsConfig[divisionSelected].lpGroup.map((lps, index) => (
            <p
              key={index}
              onClick={() =>
                addPreferences(PREFERENCES_PROPERTIES.LP_GROUP, lps)
              }
              className={`division__chip ${isSelected(
                preferences?.lpGroup,
                lps
              )}`}
            >
              {lps}
            </p>
          ))}
        </section>
      )}
      {divisionsConfig[divisionSelected]?.lps && (
        <section className="card__division__icons lps">
          <input
            name={PREFERENCES_PROPERTIES.LPS}
            type={FORM_TYPES.NUMBER}
            placeholder="0"
            max="99"
            min="0"
            maxLength="2"
            onChange={(event) =>
              addPreferences(PREFERENCES_PROPERTIES.LPS, event.target.value)
            }
            className="counter__value"
          />
          LP
        </section>
      )}
      {divisionsConfig[divisionSelected]?.lpGain && (
        <section className="card__division__icons lps__gain">
          LP Gain:
          {divisionsConfig[divisionSelected].lpGain.map((lps, index) => (
            <p
              key={index}
              onClick={() =>
                addPreferences(PREFERENCES_PROPERTIES.LP_GAIN, lps)
              }
              className={`division__chip ${isSelected(
                preferences?.lpGain,
                lps
              )}`}
            >
              {lps}
            </p>
          ))}
        </section>
      )}
      {divisionSelected !== PREFERENCES_PROPERTIES.UNRANKED && (
        <img
          className="card__division__frame"
          src={divisionFrameBuilder(divisionSelected)}
          alt="frame"
        />
      )}
    </section>
  );
};

export default CardDivisionLeague;
