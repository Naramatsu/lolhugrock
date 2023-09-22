/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState, useContext } from "react";
import Counter from "../Counter";
import SelectCurrency from "../SelectCurrency";
import VanillaTilt from "vanilla-tilt";
import {
  cancel,
  coachingType,
  coachingTypesPreferences,
  hours,
  lock,
  pick,
} from "./data";
import {
  currencyFormat,
  summonerAndLaneImgBuilder,
  isSelected,
  titlOptions,
  translateToEn,
} from "../../utils";
import { AiOutlineSolution } from "react-icons/ai";
import { LanguajeAppContext } from "../../context/languaje";
import { USD } from "../../utils/constants";
import "./CardCoach.style.scss";

const options = titlOptions({ max: 10 });

const typeFormated = (type, languaje) => coachingType[type][languaje];

const CardCoach = ({ color, data }) => {
  const { name, lanes, description, creditCost, img } = data;
  const { languaje } = useContext(LanguajeAppContext);
  const [showHoursPanel, setShowHoursPanel] = useState(false);
  const [currency, setCurrency] = useState(USD);
  const [coachHours, setCoachHours] = useState(1);
  const [coachType, setCoachType] = useState(
    coachingType.single[languaje] || ""
  );
  const coachTypeTranslated = translateToEn(coachType);
  const [coachCreditTotal, setCoachCreditTotal] = useState(
    creditCost[coachTypeTranslated][currency]
  );
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, []);

  useEffect(() => {
    const formatting_options = currencyFormat(currency);
    const price = coachHours * creditCost[coachTypeTranslated][currency];
    setCoachCreditTotal(
      price.toLocaleString(
        currency === USD ? "en-US" : "es-CO",
        formatting_options
      )
    );
  }, [coachHours, currency, coachTypeTranslated]);

  const handlerAddHours = () =>
    coachHours < 24 && setCoachHours(coachHours + 1);

  const handlerReduceHours = () =>
    coachHours > 0 && setCoachHours(coachHours - 1);

  return (
    <section
      className="card-coaching__box"
      style={{ "--cl": color }}
      ref={tilt}
    >
      <section className="card-coaching"></section>
      <section className="card-coaching__elements bg">
        <AiOutlineSolution className="quote" />
      </section>
      <section className="card-coaching__elements img">
        <img src={img} alt="avatar" />
      </section>
      <section className="card-coaching__elements name">
        <p>{name}</p>
        {lanes.map((lane, index) => (
          <img
            key={index}
            className="lane"
            src={summonerAndLaneImgBuilder(lane)}
            alt="lane"
          />
        ))}
      </section>
      <section className="card-coaching__elements text">
        {showHoursPanel ? (
          <>
            <section className="coaching__type" style={{ "--bg": color }}>
              {coachingTypesPreferences.map((preference, index) => (
                <section
                  key={index}
                  className={`division__chip ${isSelected(
                    coachType,
                    typeFormated(preference, languaje)
                  )}`}
                  onClick={() =>
                    setCoachType(typeFormated(preference, languaje))
                  }
                >
                  {typeFormated(preference, languaje)}
                </section>
              ))}
            </section>
            <section className="card-coaching__elements__panel">
              <SelectCurrency
                gold={coachCreditTotal}
                value={currency}
                onChange={setCurrency}
              />
              <Counter
                handlerAdd={handlerAddHours}
                handlerReduce={handlerReduceHours}
                value={coachHours}
              />
              <p>{hours[languaje]}</p>
              <section className="lock__cancel__btns">
                <button className="btn__pay" onClick={() => {}}>
                  {lock[languaje]}
                </button>
                <button
                  className="btn__pay cancel"
                  onClick={() => setShowHoursPanel(false)}
                >
                  {cancel[languaje]}
                </button>
              </section>
            </section>
          </>
        ) : (
          <>
            <p>{description[languaje]}</p>
            <button
              className="btn__pay"
              onClick={() => setShowHoursPanel(true)}
            >
              {pick[languaje]}
            </button>
          </>
        )}
      </section>
    </section>
  );
};

export default CardCoach;
