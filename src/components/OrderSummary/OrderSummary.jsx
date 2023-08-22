/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import Panel from "../Panel";
import { FormAppContext } from "../../context/form";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import {
  calculateCreditsByPreferences,
  currencyFormat,
  defineCreditsValue,
  isBtnAvailable,
  isOrderEmptyValidator,
  summaryBuilder,
} from "../../utils";
import { LanguajeAppContext } from "../../context/languaje";
import { COP, PAY_LABEL, USD, YOUR_ORDER } from "../../utils/constants";
import { useHistory } from "react-router-dom";
import "./OrderSummary.style.scss";

const OrderSummary = ({ color }) => {
  const { languaje } = useContext(LanguajeAppContext);
  const { form, resetForm } = useContext(FormAppContext);
  const [currency, setCurrency] = useState(USD);
  const [totalCredits, setTotalCredits] = useState(0);
  const history = useHistory();
  const formName = Object.keys(form).join("");
  const formProperties = form[formName];
  const orderSummary = formName ? summaryBuilder(formProperties, languaje) : [];
  const totalOrderCredits = formName
    ? calculateCreditsByPreferences(formProperties, languaje)
    : 0;
  const isBtnPayDisabled = formName
    ? !isBtnAvailable(formProperties, formName, languaje)
    : false;
  const isBtnDisabledClass = isBtnPayDisabled ? "disabled" : "";
  const isOrderEmpty = isOrderEmptyValidator(formProperties);

  useEffect(() => {
    resetForm();
  }, [history.location.pathname]);

  useEffect(() => {
    const formatting_options = currencyFormat(currency);
    if (formName) {
      const price =
        defineCreditsValue(formProperties, languaje, currency) *
        totalOrderCredits;
      setTotalCredits(
        price.toLocaleString(
          currency === USD ? "en-US" : "es-CO",
          formatting_options
        )
      );
    }
  }, [form, currency, totalOrderCredits]);

  return (
    <section className="order__summary" style={{ "--cl": color }}>
      <Panel color={color}>
        <h3>{YOUR_ORDER[languaje]}</h3>
        <section className="order__summary__container">
          {orderSummary.map(({ label, items }, index) =>
            items && items.length ? (
              <p key={index}>
                <b>{label}: </b>
                {items}
              </p>
            ) : (
              isOrderEmpty && (
                <section key={index} className="no__order">
                  <AiOutlineExclamationCircle size={75} />
                  Aun no hay preferencias seleccionadas.
                </section>
              )
            )
          )}
        </section>
        <section className="order__summary__total">
          <h3>Total</h3>
          <section className="order__summary__total__container">
            <h2 className="text-gold">{totalCredits}</h2>
            <section className="select__custom">
              <section className="select__section__options">
                <label className="select__arrow"></label>
                <select
                  style={{ "--bg": color }}
                  value={currency}
                  onChange={(event) => setCurrency(event.target.value)}
                >
                  <option value={USD}>{USD}</option>
                  <option value={COP}>{COP}</option>
                </select>
              </section>
            </section>
          </section>
          <button
            className={`btn__pay ${isBtnDisabledClass}`}
            disabled={isBtnPayDisabled}
            onClick={() => alert("Pending...")}
          >
            {PAY_LABEL[languaje]}
          </button>
          <section></section>
        </section>
      </Panel>
    </section>
  );
};

export default OrderSummary;
