import React, { useContext } from "react";
import Panel from "../Panel/Panel";
import SelectCustom from "../SelectCustom/SelectCustom";
import { AppContext } from "../../context";
import { summaryBuilder } from "../../utils";
import "./OrderSummary.style.scss";

const OrderSummary = () => {
  const { form } = useContext(AppContext);
  const formName = Object.keys(form).join("");
  const formProperties = form[formName];
  const orderSummary = formName ? summaryBuilder(formProperties) : {};
  return (
    <section className="order__summary">
      <Panel>
        <h3>Su pedido</h3>
        <section className="order__summary__container">
          {orderSummary.length &&
            orderSummary.map(({ label, items }, index) =>
              items && items.length ? (
                <p key={index}>
                  <b>{label}: </b>
                  {items}
                </p>
              ) : (
                <span key={index} />
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
              noImage
              noLabel
            />
          </section>
          <button className="btn__pay">Pagar</button>
          <section></section>
        </section>
      </Panel>
    </section>
  );
};

export default OrderSummary;
