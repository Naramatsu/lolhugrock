/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { ANYFILL, FILLED } from "../../utils/constants";
import { summonerAndLaneImgBuilder } from "../../utils";
import { useHistory } from "react-router-dom";
import "./SelectCustom.style.scss";

const isFilled = (item) => {
  if (item === "" || item === ANYFILL) return "";
  return FILLED;
};

const SelectCustom = ({
  label,
  options,
  onSelect,
  noImage = false,
  noLabel = false,
  multiple = false,
  color = "#d441ff",
  selected,
}) => {
  const [optionSelected, setOptionSelected] = useState(selected || "");
  const [optionsSelected, setOptionsSelected] = useState([]);
  const history = useHistory();

  useEffect(() => {
    setOptionSelected("");
    setOptionsSelected([]);
  }, [history.location.pathname]);

  useEffect(() => {
    if (selected) {
      if (multiple) {
        setOptionSelected("");
        setOptionsSelected(selected);
      } else {
        setOptionSelected(selected);
      }
      onSelect(label, selected);
    }
  }, []);

  const addPreferences = (event) => {
    const { value } = event.target;
    if (multiple) {
      if (optionsSelected.length < 3 && !optionsSelected.includes(value)) {
        const optionsTemp = [...(optionsSelected || []), value];
        setOptionsSelected([...(optionsSelected || []), value]);
        onSelect(label, optionsTemp);
      }
    } else {
      onSelect(label, value);
      setOptionSelected(value);
    }
  };

  const onRemoveOption = (item) => {
    const optionsTemp = optionsSelected.filter((option) => option !== item);
    setOptionsSelected(optionsTemp);
    onSelect(label, optionsTemp);
  };

  return (
    <section className="select__custom">
      {!noLabel && <label>{label}</label>}
      {!noImage && (
        <img src={summonerAndLaneImgBuilder(optionSelected)} alt="roll" />
      )}
      <section className="select__section__options">
        <label className="select__arrow"></label>
        <select
          className={`${isFilled(optionSelected)}`}
          onChange={addPreferences}
          style={{ "--bg": color }}
          value={optionSelected}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </section>
      {multiple && (
        <section className="select__custom__multiple">
          {optionsSelected.map((option, index) => (
            <label
              className="division__chip filled"
              style={{ "--bg": color }}
              key={index}
              onClick={() => onRemoveOption(option)}
            >
              {option}
            </label>
          ))}
        </section>
      )}
    </section>
  );
};

export default SelectCustom;
