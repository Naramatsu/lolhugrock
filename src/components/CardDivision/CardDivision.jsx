/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useContext,
} from "react";
import CardDivisionLeague from "../CardDivisionLeague";
import CardDivisionRange from "../CardDivisionRange";
import VanillaTilt from "vanilla-tilt";
import { divisionsConfig } from "./data";
import { FormAppContext } from "../../context/form";
import {
  FORM_TYPES,
  PREFERENCES_PROPERTIES,
  TITLES,
  highElo,
  latamServers,
} from "../../utils/constants";
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
  const { setForm, form } = useContext(FormAppContext);
  const [preferences, setPreferences] = useState({});
  const isDivisionalCard = type === FORM_TYPES.DIVISIONAL;
  const [divisionSelected, setDivisionSelected] = useState(
    form[title][label]?.league || PREFERENCES_PROPERTIES.UNRANKED
  );
  const [nroGames, setNroGames] = useState(form[title][label]?.nroGames || 0);
  const tilt = useRef(null);
  const history = useHistory();

  const isLatamServer = !latamServers.includes(
    form[TITLES.DIVISIONBOOST]?.Servidor
  );

  const newItems =
    isDivisionalCard && isLatamServer
      ? items.filter((item) => !highElo.includes(item))
      : items;

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, []);

  useEffect(() => {
    setPreferences({});
  }, [history.location.pathname]);

  useEffect(() => {
    if ((isDivisionalCard || nroGames) && form[title][label]) {
      const preferencesTemp = {};
      Object.keys(form[title][label]).forEach((p) => {
        preferencesTemp[p] = form[title][label][p];
      });
      setPreferences(preferencesTemp);
    }
  }, []);

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

  const handlerAddGames = useCallback(
    () =>
      nroGames < max &&
      addPreferences(PREFERENCES_PROPERTIES.NRO_GAMES, nroGames + 1)
  );

  const handlerReduceGames = useCallback(
    () =>
      nroGames > 0 &&
      addPreferences(PREFERENCES_PROPERTIES.NRO_GAMES, nroGames - 1)
  );

  return (
    <>
      {isDivisionalCard ? (
        <CardDivisionLeague
          tilt={tilt}
          color={color}
          label={label}
          divisionSelected={divisionSelected}
          items={newItems}
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
