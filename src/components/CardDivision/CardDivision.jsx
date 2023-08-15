import React, { useState, useEffect, useRef, useContext } from "react";
import SelectCustom from "../SelectCustom/SelectCustom";
import VanillaTilt from "vanilla-tilt";
import {
  divisionFrameBuilder,
  divisionImgBuilder,
  isSelected,
  titlOptions,
} from "../../utils";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { divisionsConfig } from "./data";
import { FormAppContext } from "../../context/form";
import { FORM_TYPES, PREFERENCES_PROPERTIES } from "../../utils/constants";
import { useHistory } from "react-router-dom";
import "./CardDivision.style.scss";

const options = titlOptions({ max: 5, speed: 200, glare: false });

const CardDivision = ({
  title,
  label,
  items,
  type = FORM_TYPES.DIVISIONAL,
  color: colorFormatted,
  min = 0,
  max = 5,
}) => {
  const { setForm, resetForm } = useContext(FormAppContext);
  const [preferences, setPreferences] = useState({});
  const [divisionSelected, setDivisionSelected] = useState(
    PREFERENCES_PROPERTIES.UNRANKED
  );
  const [nroGames, setNroGames] = useState(0);
  const tilt = useRef(null);
  const history = useHistory();
  const isDivisionalCard = type === FORM_TYPES.DIVISIONAL;

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, []);

  useEffect(() => {
    resetForm();
    setPreferences({});
    setDivisionSelected(PREFERENCES_PROPERTIES.UNRANKED);
    setNroGames(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history.location.pathname]);

  const addPreferences = (name, item) => {
    setPreferences({
      ...preferences,
      [name]: item,
    });
    if (name === PREFERENCES_PROPERTIES.LEAGUE) setDivisionSelected(item);
    if (name === PREFERENCES_PROPERTIES.NRO_GAMES) setNroGames(parseInt(item));
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

  const handlerAddGames = () => {
    if (nroGames < max) {
      addPreferences(PREFERENCES_PROPERTIES.NRO_GAMES, nroGames + 1);
    }
  };

  const handlerReduceGames = () => {
    if (nroGames > 0) {
      addPreferences(PREFERENCES_PROPERTIES.NRO_GAMES, nroGames - 1);
    }
  };

  return (
    <>
      {isDivisionalCard ? (
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
                className="lps__textfield"
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
      ) : (
        <section className="card__division__range__input" ref={tilt}>
          <label>{label}</label>
          <section className="card__division__range__butons">
            <AiFillMinusCircle fontSize="50" onClick={handlerReduceGames} />
            <section className="card__division__icons lps">
              <p className="lps__textfield">{nroGames}</p>
            </section>
            <AiFillPlusCircle fontSize="50" onClick={handlerAddGames} />
          </section>
          <section className="card__division__range__butons range">
            0
            <input
              style={{ "--cl": colorFormatted }}
              type={FORM_TYPES.RANGE}
              min={min}
              max={max}
              step="1"
              value={nroGames}
              name={PREFERENCES_PROPERTIES.NRO_GAMES}
              onChange={(event) =>
                addPreferences(
                  PREFERENCES_PROPERTIES.NRO_GAMES,
                  event.target.value
                )
              }
            />
            {max}
          </section>
        </section>
      )}
    </>
  );
};

export default CardDivision;
