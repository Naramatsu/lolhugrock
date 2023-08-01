import React, { useState } from "react";
import { imgBuilder } from "../../utils";
import "./SelectCustom.style.scss";

const isFilled = (item) => {
  if (item === "" || item === "Any") return "";
  return "filled";
};

const SelectCustom = ({ label, options, onSelect, noImage = false }) => {
  const [optionSelected, setOptionSelected] = useState("");

  const addPreferences = (event) => {
    const { value } = event.target;
    setOptionSelected(value);
    onSelect(label, value);
  };

  return (
    <section className="select__custom">
      <label>{label}</label>
      {!noImage && <img src={imgBuilder(optionSelected)} alt="roll" />}
      <section className="select__section__options">
        <label className="select__arrow"></label>
        <select
          className={`${isFilled(optionSelected)}`}
          onChange={addPreferences}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </section>
    </section>
  );
};

export default SelectCustom;
