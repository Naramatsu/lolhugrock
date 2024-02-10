import React from "react";
import { isSelected } from "../../utils";
import "./SelectChip.style.scss";

const SelectChip = ({ shape, label, value, name, onSelect, selected }) => (
  <label
    className={`form__choose ${shape} ${isSelected(selected, value)}`}
    onClick={() => onSelect(label, value)}
  >
    {name}
  </label>
);

export default SelectChip;
