import React, { useContext, useEffect } from "react";
import Panel from "../Panel/Panel";
import SelectCustom from "../SelectCustom/SelectCustom";
import { FormAppContext } from "../../context/form";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import {
  isBtnAvailable,
  isOrderEmptyValidator,
  summaryBuilder,
} from "../../utils";
import { LanguajeAppContext } from "../../context/languaje";
import { PAY_LABEL, YOUR_ORDER } from "../../utils/constants";
import { useHistory } from "react-router-dom";
import "./OrderSummary.style.scss";

const OrderSummary = ({ color }) => {
  const { languaje } = useContext(LanguajeAppContext);
  const { form, resetForm } = useContext(FormAppContext);
  const history = useHistory();
  const formName = Object.keys(form).join("");
  const formProperties = form[formName];
  const orderSummary = formName ? summaryBuilder(formProperties, languaje) : [];
  const isBtnPayDisabled = formName
    ? !isBtnAvailable(formProperties, formName)
    : false;
  const isBtnDisabledClass = isBtnPayDisabled ? "disabled" : "";
  const isOrderEmpty = isOrderEmptyValidator(formProperties);

  useEffect(() => {
    resetForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history.location.pathname]);

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
            <h2 className="text-gold">$887.44</h2>
            <SelectCustom
              options={["USD", "COP"]}
              onSelect={() => {}}
              color={color}
              noImage
              noLabel
            />
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
