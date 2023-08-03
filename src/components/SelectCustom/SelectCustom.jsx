import React, { useState } from "react";
import { imgBuilder } from "../../utils";
import "./SelectCustom.style.scss";

const isFilled = (item) => {
  if (item === "" || item === "Any") return "";
  return "filled";
};

const SelectCustom = ({
  label,
  options,
  onSelect,
  noImage = false,
  noLabel = false,
  color = "#d441ff",
}) => {
  const [optionSelected, setOptionSelected] = useState("");

  const addPreferences = (event) => {
    const { value } = event.target;
    setOptionSelected(value);
    onSelect(label, value);
  };

  return (
    <section className="select__custom">
      {!noLabel && <label>{label}</label>}
      {!noImage && <img src={imgBuilder(optionSelected)} alt="roll" />}
      <section className="select__section__options">
        <label className="select__arrow"></label>
        <select
          className={`${isFilled(optionSelected)}`}
          onChange={addPreferences}
          style={{ "--bg": color }}
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
