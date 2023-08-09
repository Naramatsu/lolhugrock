import React, { useState, useEffect, useRef, useContext } from "react";
import SelectCustom from "../SelectCustom/SelectCustom";
import VanillaTilt from "vanilla-tilt";
import {
  divisionFrameBuilder,
  divisionImgBuilder,
  isSelected,
  titlOptions,
} from "../../utils";
import { AppContext } from "../../context";
import { divisionsConfig } from "./data";
import "./CardDivision.style.scss";

const options = titlOptions({ max: 5, speed: 200, glare: false });

const CardDivision = ({ title, label, items }) => {
  const { setForm } = useContext(AppContext);
  const [preferences, setPreferences] = useState({});
  const [divisionSelected, setDivisionSelected] = useState("Unranked");
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, []);

  const addPreferences = (name, item) => {
    setPreferences({
      ...preferences,
      [name]: item,
    });
    if (name === "league") setDivisionSelected(item);
  };

  useEffect(() => {
    if (preferences)
      setForm({
        title,
        property: label,
        item: preferences,
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preferences]);

  const color = divisionsConfig[divisionSelected].color;
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
        label="league"
        onSelect={addPreferences}
        color={color}
        noImage
        noLabel
      />
      {divisionsConfig[divisionSelected]?.divisions && (
        <section className="card__division__icons">
          {divisionsConfig[divisionSelected].divisions.map(
            (division, index) => (
              <p
                key={index}
                onClick={() => addPreferences("division", division)}
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
              onClick={() => addPreferences("lpGroup", lps)}
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
            name="lps"
            type="number"
            placeholder="0"
            onChange={(event) => addPreferences("lps", event.target.value)}
            className="lps__textfield"
          />{" "}
          LP
        </section>
      )}
      {divisionsConfig[divisionSelected]?.lpGain && (
        <section className="card__division__icons lps__gain">
          LP Gain:
          {divisionsConfig[divisionSelected].lpGain.map((lps, index) => (
            <p
              key={index}
              onClick={() => addPreferences("lpGain", lps)}
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
      {divisionSelected !== "Unranked" && (
        <img
          className="card__division__frame"
          src={divisionFrameBuilder(divisionSelected)}
          alt="frame"
        />
      )}
    </section>
  );
};

export default CardDivision;
