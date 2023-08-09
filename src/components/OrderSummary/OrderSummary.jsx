import React, { useContext } from "react";
import Panel from "../Panel/Panel";
import SelectCustom from "../SelectCustom/SelectCustom";
import { AppContext } from "../../context";
import "./OrderSummary.style.scss";

const OrderSummary = () => {
  const { form } = useContext(AppContext);
  console.log("form", form);
  return (
    <section className="order__summary">
      <Panel>
        <h3>Su pedido</h3>
        <section className="order__summary__container">
          <p>
            <b>Desde: </b>
            Platino IV (0 - 29 LP)
          </p>
          <p>
            <b>Hasta: </b>
            Master 50 LP (+15 gain)
          </p>
          <p>
            <b>Queue: </b>
            Solo Queue
          </p>
          <p>
            <b>Server: </b>
            LAN
          </p>
          <p>
            <b>Roll principal: </b>
            ADC
          </p>
          <p>
            <b>Roll secundario: </b>
            Jungla
          </p>
          <p>
            <b>Hechizos: </b>D (Clean), F (Fash)
          </p>
          <p>
            <b>Pool: </b>
            Xayah, Ezreal, Kai'sa
          </p>
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
