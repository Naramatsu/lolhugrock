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
import {
  noPreferencesSelectedLabel,
  orderSummaryMessageTemplate,
} from "./data";
import { ORDER_LABEL, USD, YOUR_ORDER } from "../../utils/constants";
import { RxReset } from "react-icons/rx";
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

  const handlerOrder = () => {
    const url = new URL(
      `https://wa.me/${process.env.REACT_APP_WHATSAPP_NUMBER}`
    );
    const message = orderSummaryMessageTemplate(window.location.href);
    url.searchParams.set("text", message[languaje]);
    window.open(url.href, "_blank");
  };

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
                  {noPreferencesSelectedLabel[languaje]}
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
          <section className="button-sections">
            <button
              className={`btn__pay ${isBtnDisabledClass}`}
              disabled={isBtnPayDisabled}
              onClick={handlerOrder}
            >
              {ORDER_LABEL[languaje]}
            </button>
            <RxReset
              className="reset"
              onClick={() => {
                resetForm(formName, languaje);
                history.push({
                  pathname: history.location.pathname,
                  search: `?form={}`,
                });
              }}
            />
          </section>
          <br />
        </section>
      </Panel>
    </section>
  );
};

export default OrderSummary;
