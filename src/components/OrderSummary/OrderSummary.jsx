/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import Panel from "../Panel";
import SelectCurrency from "../SelectCurrency";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FormAppContext } from "../../context/form";
import {
  calculateCreditsByPreferences,
  currencyFormat,
  defineCreditsValue,
  isBtnAvailable,
  isOrderEmptyValidator,
  summaryBuilder,
} from "../../utils";
import { LanguajeAppContext } from "../../context/languaje";
import { PAY_LABEL, USD, YOUR_ORDER } from "../../utils/constants";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
import "./OrderSummary.style.scss";

const OrderSummary = ({ color }) => {
  const { languaje } = useContext(LanguajeAppContext);
  const { form, setFormByUrl } = useContext(FormAppContext);
  const [currency, setCurrency] = useState(USD);
  const [totalCredits, setTotalCredits] = useState(0);
  const history = useHistory();
  const params = history.location.search;
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
    if (isOrderEmpty && params)
      setFormByUrl(JSON.parse(queryString.parse(params).form));
  }, [params, isOrderEmpty]);

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

  useEffect(() => {
    history.push({
      pathname: history.location.pathname,
      search: `?form=${JSON.stringify(form)}`,
    });
  }, []);

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
          <SelectCurrency
            gold={totalCredits}
            value={currency}
            onChange={setCurrency}
          />
          <button
            className={`btn__pay ${isBtnDisabledClass}`}
            disabled={isBtnPayDisabled}
            onClick={() => console.log(window.location)}
          >
            {PAY_LABEL[languaje]}
          </button>
          <br />
        </section>
      </Panel>
    </section>
  );
};

export default OrderSummary;
