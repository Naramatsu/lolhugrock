/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef, useContext } from "react";
import CardDivisionLeague from "../CardDivisionLeague";
import CardDivisionRange from "../CardDivisionRange";
import VanillaTilt from "vanilla-tilt";
import { divisionsConfig } from "./data";
import { FormAppContext } from "../../context/form";
import { FORM_TYPES, PREFERENCES_PROPERTIES } from "../../utils/constants";
import { titlOptions } from "../../utils";
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
  }, [preferences]);

  const color = divisionsConfig[divisionSelected].color;

  const handlerAddGames = () =>
    nroGames < max &&
    addPreferences(PREFERENCES_PROPERTIES.NRO_GAMES, nroGames + 1);

  const handlerReduceGames = () =>
    nroGames > 0 &&
    addPreferences(PREFERENCES_PROPERTIES.NRO_GAMES, nroGames - 1);

  return (
    <>
      {isDivisionalCard ? (
        <CardDivisionLeague
          tilt={tilt}
          color={color}
          label={label}
          divisionSelected={divisionSelected}
          items={items}
          addPreferences={addPreferences}
          divisionsConfig={divisionsConfig}
          preferences={preferences}
        />
      ) : (
        <CardDivisionRange
          addPreferences={addPreferences}
          tilt={tilt}
          max={max}
          label={label}
          color={colorFormatted}
          min={min}
          handlerAdd={handlerAddGames}
          handlerReduce={handlerReduceGames}
          value={nroGames}
        />
      )}
    </>
  );
};

export default CardDivision;
