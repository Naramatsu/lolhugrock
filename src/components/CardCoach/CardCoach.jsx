/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState, useContext } from "react";
import Counter from "../Counter";
import SelectCurrency from "../SelectCurrency";
import VanillaTilt from "vanilla-tilt";
import { cancel, hours, lock, pick } from "./data";
import { currencyFormat, imgBuilder, titlOptions } from "../../utils";
import { FaQuoteLeft } from "react-icons/fa";
import { LanguajeAppContext } from "../../context/languaje";
import { USD } from "../../utils/constants";
import "./CardCoach.style.scss";

const options = titlOptions();

const CardCoach = ({ color, data }) => {
  const { name, lanes, description, creditCost, img } = data;
  const { languaje } = useContext(LanguajeAppContext);
  const [showHoursPanel, setShowHoursPanel] = useState(false);
  const [currency, setCurrency] = useState(USD);
  const [coachHours, setCoachHours] = useState(1);
  const [coachCreditTotal, setCoachCreditTotal] = useState(
    creditCost[currency]
  );
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, []);

  useEffect(() => {
    const formatting_options = currencyFormat(currency);

    const price = coachHours * creditCost[currency];
    setCoachCreditTotal(
      price.toLocaleString(
        currency === USD ? "en-US" : "es-CO",
        formatting_options
      )
    );
  }, [coachHours, currency]);

  const handlerAddHours = () => {
    if (coachHours < 24) setCoachHours(coachHours + 1);
  };

  const handlerReduceHours = () => {
    if (coachHours > 0) setCoachHours(coachHours - 1);
  };

  return (
    <section className="card-coaching__box" ref={tilt}>
      <section className="card-coaching"></section>
      <section className="card-coaching__elements bg">
        <FaQuoteLeft className="quote" />
      </section>
      <section className="card-coaching__elements img">
        <img src={img} alt="avatar" />
      </section>
      <section className="card-coaching__elements name">
        <p>{name}</p>
        {lanes.map((lane, index) => (
          <img key={index} className="lane" src={imgBuilder(lane)} alt="lane" />
        ))}
      </section>
      <section
        className="card-coaching__elements text"
        style={{ "--cl": color }}
      >
        {showHoursPanel ? (
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
        ) : (
          <>
            <p>{description}</p>
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
