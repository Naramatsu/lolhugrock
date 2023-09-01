import React from "react";
import { COP, USD } from "../../utils/constants";
import "./SelectCurrency.style.scss";

const SelectCurrency = ({ gold, value, onChange }) => (
  <section className="select__currency__container">
    <h2 className="text-gold">{gold}</h2>
    <section className="select__currency">
      <section className="select__currency__options">
        <label className="select__arrow"></label>
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
        >
          <option value={USD}>{USD}</option>
          <option value={COP}>{COP}</option>
        </select>
      </section>
    </section>
  </section>
);

export default SelectCurrency;
